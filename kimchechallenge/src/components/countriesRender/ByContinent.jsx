import React, { memo } from "react";
import countriesByContinent from "../../mappers/countriesByContinent";
import capitalIcon from "../../assets/capital.png";
import { Name, Country, ListContainer, Sort, LangData, Languages, Data, CapData, LangTag, Capital, EngName, Native, Card, List } from "./styles";

const ByContinent = memo(({ data, query, sort }) => {

    if(data) return (
        countriesByContinent(data, query, sort).map(({ name, countries, code }) =>
            <ListContainer key={code}>
                <div><Sort>{name}</Sort>, {countries.length} countries</div>
                
                <List>
                    {countries.map(({ name, native, capital, emoji, languages }) => 
                        <Card key={name}>
                                <Country>
                                    {emoji} 
                                    <Name>
                                        <EngName>{name}</EngName> <Native>{native}</Native>
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


export default ByContinent;