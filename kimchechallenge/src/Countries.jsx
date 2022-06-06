import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { COUNTRIES_BY_CONTINENT, COUNTRIES_AND_LANGUAGES } from './queries';
import ByContinent from './components/ByContinent';
import ByLanguage from './components/ByLanguage';

export default function Countries({search, GroupBy}){

    const query = GroupBy === 'Continent' ? COUNTRIES_BY_CONTINENT : COUNTRIES_AND_LANGUAGES;

    const { loading, error, data } = useQuery(gql`${query}`);

    if (error||loading) return <p>{error? `Error: ${error.message}` : "Loading..."}</p>;

    if(GroupBy === 'Continent') 
    return <ByContinent data={data} query={search}/>
    
    if(GroupBy === 'Language')
    return <ByLanguage data={data} query={search}/>
}