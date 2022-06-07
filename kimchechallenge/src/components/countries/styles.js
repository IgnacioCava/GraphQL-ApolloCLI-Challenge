import styled from "styled-components";

export const Scrollable = styled.div`
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
        background-color: var(--scrollbar-track-color);
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb-color);
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
`

export const Loading = styled.img`
    height: 25%;
`

export const LoadWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    margin-bottom:80px;
    overflow: hidden;
`