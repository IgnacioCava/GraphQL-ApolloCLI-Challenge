import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { COUNTRIES_BY_CONTINENT, COUNTRIES_AND_LANGUAGES } from './queries';
import ByContinent from './components/countriesRender/ByContinent';
import ByLanguage from './components/countriesRender/ByLanguage';
import styled from 'styled-components';
import loading from './assets/loading.gif';
import mag from './assets/mag.png';

export default function Countries({searchedQuery, GroupBy, SortBy}){

    const query = GroupBy === 'continent' ? COUNTRIES_BY_CONTINENT : COUNTRIES_AND_LANGUAGES;

    const { loading, error, data } = useQuery(gql`${query}`);

    if (error||loading) return (
        <LoadWrapper>{error? 
            `Error: ${error.message}` 
            : <Loading src={require('./assets/loading.gif')} alt='Loading...'/>}
        </LoadWrapper>
    )

    return(
        <Scrollable>
            {GroupBy === 'continent' ? <ByContinent data={data} query={searchedQuery} sort={SortBy}/> 
            : <ByLanguage data={data} query={searchedQuery} sort={SortBy}/>}
        </Scrollable>
    )
}

const Scrollable = styled.div`
    height: 100%;
    margin-bottom: 20px;
    overflow-y: auto;
    scroll-snap-align: start;
    scroll-snap-type: y mandatory;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-clip: padding-box;
        background-color: #000000a6;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #0080ff;
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
`

const Loading = styled.img`
    height: 25%;
`

const LoadWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

overflow: hidden;
    height: 100%;
    margin-bottom:80px;
`
