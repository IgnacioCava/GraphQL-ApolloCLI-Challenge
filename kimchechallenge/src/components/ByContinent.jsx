import React, { memo, useState } from "react";
import countriesByContinent from "../mappers/countriesByContinent";

const ByContinent = memo(({ data, query, sort }) => {

    if(data) return (
        <div>
            {countriesByContinent(data, query, sort).map(({ name, countries, code }) => (
                <div key={code}>
                    <h1>{name}</h1>
                    {countries.map(({ name }, i) => <p key={i}>{name}</p>)}
                </div>
            ))}
        </div>
    ) 
    else return null
})

export default ByContinent;