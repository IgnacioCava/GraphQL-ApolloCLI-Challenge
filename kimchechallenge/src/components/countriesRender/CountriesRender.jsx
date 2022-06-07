import React, { memo } from "react";
import countriesByContinent from "../../mappers/countriesByContinent";
import countriesByLanguage from "../../mappers/countriesByLanguage";
import capitalIcon from "../../assets/capital.png";
import styled from "styled-components";
import { Name, Country, ListContainer, Sort, LangData, Languages, Data, CapData, LangTag, Capital, EngName, Native, Divisor, List, Card } from "./styles";

const CountriesRender = memo(({ data, query, sort, group }) => {

    if(data) return (
        (group==='continent'?
        countriesByContinent(data, query, sort)
        :countriesByLanguage(data, query, sort))
        .map(({ name, countries, code }) =>
            <ListContainer key={code} >
                <div><Sort>{name}</Sort>, {countries.length} countries</div>
                
                <List>
                    {countries.map(({ name, native, capital, emoji, languages, continent }) => 
                        <Divisor key={name}>
                            <Card>
                                <Country>
                                    {emoji} 
                                    <Name>
                                        <EngName>{name}</EngName> 
                                        <Native>{native}</Native>
                                        {continent&&continent.name}
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
                        </Divisor>
                    )}
                </List>
            </ListContainer>
        )) 
    else return null
})

export default CountriesRender;