import React from "react";
import { OptionsWrapper, Buttons, Button, Title } from './styles.js'

const Options = ({options, label, highlight}) => 
    <OptionsWrapper>
        <Title>{label}</Title>
        <Buttons>
            {options.map(({value, onClick, text}, i) => 
                <Button key={i} onClick={onClick} value={value} highlight={value===highlight}>
                    {text || value.charAt(0).toUpperCase()+value.substr(1)}
                </Button>   
            )}
        </Buttons>
    </OptionsWrapper>

export default Options;

