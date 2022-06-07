import styled from "styled-components";
import { Typography } from "../../config/baseStyles";
import { device } from "../../config/mediaQueries";

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    min-width: fit-content;
    width: 70%;
`
export const OptionsWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
    @media ${device.tablet} {
        flex-direction: column;
        gap:5px;
        ${Buttons}{
            justify-content: space-evenly;
        }
    }
`


export const Button = styled.button`
    background: ${props => props.highlight ? 'var(--button-hightlighted-bg)' : 'var(--button-bg)'};
    border-radius: 5px;
    border: 1px solid var(--base-border-color);
    box-shadow: inset 0px -2px 0px 0px rgb(0 0 0 / 30%);
    color: ${props => props.highlight ? 'var(--white)' : 'var(--base-font-color)'};
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    min-width: 150px;
    outline: none;
    padding: 5px;
    width: 40%;
`

export const Title = styled(Typography).attrs(() => ({size:'subtitle'}))`` 