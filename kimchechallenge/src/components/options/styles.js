import styled from "styled-components";

export const OptionsWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
`

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    min-width: fit-content;
    width: 70%;
`

export const Button = styled.button`
    background: ${props => props.highlight ? '#0080ff' : '#e6e6e6'};
    border-radius: 5px;
    border: 1px solid #898989;
    box-shadow: inset 0px -2px 0px 0px rgb(0 0 0 / 30%);
    color: ${props => props.highlight ? '#fff' : '#3a3a3a'};
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    min-width: 150px;
    outline: none;
    padding: 5px;
    width: 40%;
`