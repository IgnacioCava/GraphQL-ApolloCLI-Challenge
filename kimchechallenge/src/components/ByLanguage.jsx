import React, { memo } from "react";
import countriesByLanguage from "../mappers/countriesByLanguage";

const ByLanguage = memo(({ data, query, sort }) => {

    if(data) return (
        <div>
            {countriesByLanguage(data, query, sort).map(({ name, code, countries }) =>
                <div key={code}>
                    <h1>{name}</h1>
                    {countries.map(({ name, code }, i) => <p key={i}>{name}, {code}</p>)}
                </div>
            )}
        </div>
    )
    else return null
})

export default ByLanguage;