import React, { memo } from "react";
import countriesByLanguage from "../../mappers/countriesByLanguage";
import { Name, Country, ListContainer, Sort, LangData, Languages, Data, CapData, LangTag, Capital, EngName, Native, Card, List } from "./styles";
import capitalIcon from "../../assets/capital.png";

const ByLanguage = memo(({ data, query, sort }) => {

    if(data) return (
        countriesByLanguage(data, query, sort).map(({ name, code, countries }) =>
        <ListContainer key={code}>
            <div><Sort>{name}</Sort>, {countries.length} countries</div>
            
            <List>
                {countries.map(({ name, native, capital, emoji, languages, continent }) => 
                    <Card key={name}>
                            <Country>
                                {emoji} 
                                <Name>
                                    <EngName>{name}</EngName>
                                    <Native>{native}</Native>
                                    {continent.name}
                                </Name>
                                
                            </Country>
                            {(capital || languages.length)?
                                <Data>
                                    {capital&&
                                    <CapData>
                                        <Capital src={capitalIcon} alt="Capital" /> {capital}
                                    </CapData>}
                                    
                                    {languages.length?
                                    <LangData>
                                        <span>Official languages: </span>
                                        <Languages>{languages.map(({ name }) =><LangTag key={name}>{name}</LangTag>)}</Languages>
                                    </LangData>
                                    :null}    
                                </Data>
                            :null}
                    </Card>
                )}
            </List>
    </ListContainer>
    ))
    else return null
})

export default ByLanguage;