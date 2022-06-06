import React, { memo } from "react";
import countriesByContinent from "../mappers/countriesByContinent";

const ByContinent = memo(({ data, query }) => {

    if(data) return (
        <div>
            {countriesByContinent(data, query).map(({ name, countries, code }) => (
                <div key={code}>
                    <div>
                        <h1>{name}</h1>
                        {countries.map(({ name }, i) => <p key={i}>{name}</p>)}
                    </div>
                </div>
            ))}
        </div>
    ) 
    else return null
})

export default ByContinent;