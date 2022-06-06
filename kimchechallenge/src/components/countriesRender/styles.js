import styled from "styled-components";

export const Name = styled.div`
    display: flex;
    flex-direction: column;
`

export const Country = styled.div`
    display: flex;
    gap: 5px;
    align-items: baseline;
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    scroll-snap-align: start;
    scroll-snap-type: y mandatory;
    box-sizing: border-box;
`

export const Sort = styled.span`
    font-weight: bold;
    font-size: 2rem;
`

export const LangData = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    gap: 5px;
`

export const Languages = styled.div`
    display: flex;
    gap:5px;
    flex-wrap: wrap;
    overflow: auto;
    height: 100%;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #0080ff;
        border-radius: 10px;
    }
`

export const Data = styled.div`
    display: flex;
    height: 100%;
    box-sizing: border-box;
    flex-direction: column;
    overflow: hidden;
    padding:5px;
    gap:10px;
`

export const CapData = styled.div`
    display: flex;
    gap: 5px;
    line-height: 19px;
`

export const LangTag = styled.div` 
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 10px;
    border: 1px solid #d4d4d4;
    display: flex;
    justify-content: center;
    line-height: 19px;
    padding:3px 5px;
    width: fit-content;
    height: fit-content;
`

export const Capital = styled.img`
    width: 20px;
`

export const EngName = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
`

export const Native = styled.span`
    color: grey;
    font-size: .8rem;
`

export const Card = styled.div`
    align-items: flex-start;
    background-color: white;
    border-radius: 5px;
    border: 2px solid #898989;
    display: flex;
    flex-direction: column;
    gap:10px;
    justify-content: flex-start;
    padding:10px;
    width: 50%;
    height: 47%;
    overflow:hidden;
    box-sizing: border-box;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
    height: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    align-items: center;
    padding-right:7px;
    box-sizing: border-box;
    ::-webkit-scrollbar {
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background-clip: padding-box;
        background-color: #000000a6;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #0080ff;
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
`