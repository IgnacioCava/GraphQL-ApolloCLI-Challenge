import styled from "styled-components";

export const Mag = styled.img`
    filter: opacity(0.5);
    height: 17px;
    width: 17px;
`

export const AppWrapper = styled.div`
    align-self: center;
    box-sizing: border-box;
    color: var(--base-font-color);
    display: flex;
    flex-direction: column;
    gap:5px;
    height: 100vh;
    margin: auto;
    max-width: 600px;
    padding: 5px;
    width: 90%;
`

export const Input = styled.input`
    background-color: transparent;
    border-radius: 15px;
    border: 0;
    box-sizing: border-box;
    color: var(--input-font-color);
    font-size: var(--subdata-font-size);
    font-weight: 600;
    outline: none;
    padding:0;
    text-indent: 5px;
    width: 100%;
`

export const DivInput = styled.div`
    align-items: center;
    background: var(--input-bg);
    border-radius: 20px;
    border: 2px solid var(--base-border-color);
    box-sizing: border-box;
    display: flex;
    gap:5px;
    padding: 5px;
    width: 100%;
`