import React from "react";
import { OptionsWrapper, Buttons, Button } from './styles.js'

const Options = ({options, label, highlight}) => 
    <OptionsWrapper>
        <h3>{label}</h3>
        <Buttons>
            {options.map(({value, onClick, text}, i) => 
                <Button key={i} onClick={onClick} value={value} highlight={value===highlight}>
                    {text || value.charAt(0).toUpperCase()+value.substr(1)}
                </Button>   
            )}
        </Buttons>
    </OptionsWrapper>

export default Options;

