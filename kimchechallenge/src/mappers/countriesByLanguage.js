const countriesByLanguage = (data, query, sort) =>

    data.languages
        .filter(language =>
            data.countries.filter(country => 
                country.languages.map(e=>e.name).includes(language.name)
                && country.name.toLowerCase().includes(query.toLowerCase())
            ).length
        )
        .map(language=>{
            return {
                ...language, 
                countries: data.countries
                            .filter(country => 
                                country.languages.map(e=>e.name).includes(language.name) 
                                && country.name.toLowerCase().includes(query.toLowerCase())
                            )
            }
        })
        .sort((a, b) => 
            sort.includes('name') ?
                sort.charAt(0) === '-' ?
                -a.name.localeCompare(b.name) : a.name.localeCompare(b.name)
            : sort.charAt(0) === '-' ?
                a.countries.length - b.countries.length : b.countries.length - a.countries.length
        )

export default countriesByLanguage;