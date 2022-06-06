import styled from "styled-components";

export const Mag = styled.img`
    filter: opacity(0.5);
    height: 17px;
    width: 17px;
`

export const AppWrapper = styled.div`
    align-self: center;
    color: #3a3a3a;
    display: flex;
    flex-direction: column;
    gap:5px;
    height: 100vh;
    margin: auto;
    min-width: 500px;
    width: 60%;
`

export const Input = styled.input`
    background-color: transparent;
    border-radius: 15px;
    border: 0;
    box-sizing: border-box;
    color: #656565;
    font-size: .8rem;
    font-weight: 600;
    outline: none;
    padding:0;
    text-indent: 5px;
    width: 100%;
`

export const DivInput = styled.div`
    align-items: center;
    background: #fdfdfd;
    border-radius: 20px;
    border: 2px solid #898989;
    display: flex;
    gap:5px;
    padding: 5px;
`