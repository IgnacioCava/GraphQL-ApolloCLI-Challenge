import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { COUNTRIES_BY_CONTINENT, COUNTRIES_AND_LANGUAGES } from '../../queries';
import ByContinent from '../countriesRender/ByContinent';
import ByLanguage from '../countriesRender/ByLanguage';
import { Scrollable, Loading, LoadWrapper } from './styles';

export default function Countries({searchedQuery, GroupBy, SortBy}){

    const query = GroupBy === 'continent' ? COUNTRIES_BY_CONTINENT : COUNTRIES_AND_LANGUAGES;

    const { loading, error, data } = useQuery(gql`${query}`);

    if (error||loading) return (
        <LoadWrapper>{error? 
            `Error: ${error.message}` 
            : <Loading src={require('../../assets/loading.gif')} alt='Loading...'/>}
        </LoadWrapper>
    )

    return(
        <Scrollable>
            {GroupBy === 'continent' ? <ByContinent data={data} query={searchedQuery} sort={SortBy}/> 
            : <ByLanguage data={data} query={searchedQuery} sort={SortBy}/>}
        </Scrollable>
    )
}


