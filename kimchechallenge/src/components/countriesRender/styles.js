import styled from "styled-components";
import { Typography } from "../../config/baseStyles";

export const Name = styled.div`
    display: flex;
    flex-direction: column;
`

export const Country = styled.div`
    align-items: baseline;
    display: flex;
    gap: 5px;
`

export const ListContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    scroll-snap-align: start;
    scroll-snap-type: y mandatory;
`

export const Sort = styled(Typography).attrs(()=>({size:'title'}))``

export const LangData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    justify-content: flex-end;
    overflow: hidden;
`

export const Languages = styled.div`
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap:5px;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb-color);
        border-radius: 10px;
    }
`

export const Data = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap:10px;
    height: 100%;
    justify-content: space-between;
    overflow: hidden;
    padding:5px;
`

export const CapData = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    line-height: 19px;
`

export const LangTag = styled.div` 
    align-items: center;
    background-color: var(--tag-bg);
    border-radius: 10px;
    border: 1px solid var(--tag-border-color);
    display: flex;
    font-size: var(--subdata-font-size);
    height: fit-content;
    justify-content: center;
    line-height: 19px;
    padding:3px 5px;
    width: fit-content;
`

export const Capital = styled.img`
    width: 20px;
`

export const EngName = styled(Typography).attrs(() => ({size:'text', bold:true}))``

export const Native = styled(Typography).attrs(() => ({size:'subdata',color:'grey'}))``

export const Divisor = styled.div`
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap:10px;
    height: 50%;
    justify-content: flex-start;
    overflow:hidden;
    padding:5px;
    scroll-snap-align: start;
    width: 50%;
`

export const Card = styled.div`
    background-color: var(--white);
    border-radius: 5px;
    border: 2px solid var(--base-border-color);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px;
    width: 100%;
`

export const List = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    ::-webkit-scrollbar {
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background-clip: padding-box;
        background-color: var(--scrollbar-track-color);
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb-color);
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
`