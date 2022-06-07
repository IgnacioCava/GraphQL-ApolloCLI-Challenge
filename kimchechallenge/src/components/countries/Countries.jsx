import React, { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { COUNTRIES_BY_CONTINENT, COUNTRIES_AND_LANGUAGES } from '../../queries';
import { Scrollable, Loading, LoadWrapper } from './styles';
import CountriesRender from '../countriesRender/CountriesRender';

export default function Countries({searchedQuery, GroupBy, SortBy}){

    const scroll = useRef(null);

    useEffect(() => {
        scroll.current && scroll.current.scrollTo(0, 0);
    });

    const query = GroupBy === 'continent' ? COUNTRIES_BY_CONTINENT : COUNTRIES_AND_LANGUAGES;

    const { loading, error, data } = useQuery(gql`${query}`);

    if (error||loading) return (
        <LoadWrapper>{error? 
            `Error: ${error.message}` 
            : <Loading src={require('../../assets/loading.gif')} alt='Loading...'/>}
        </LoadWrapper>
    )

    return (
        <Scrollable ref={scroll}>
            <CountriesRender data={data} query={searchedQuery} sort={SortBy} group={GroupBy}/>
        </Scrollable>
    )
}


