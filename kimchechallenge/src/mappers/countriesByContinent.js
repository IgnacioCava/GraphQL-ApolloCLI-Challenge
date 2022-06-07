const countriesByContinent = (data, query, sort) =>

    data.continents
        .filter(continent=>
            continent.countries.filter(country => 
                country.name.toLowerCase().includes(query.toLowerCase())
            ).length
        )
        .map(continent=>{
            return {
                ...continent,
                countries: continent.countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
            } 
        })
        .sort((a, b) => 
            sort.includes('name') ? 
                sort.charAt(0) === '-' ?
                -a.name.localeCompare(b.name) : a.name.localeCompare(b.name)
            : sort.charAt(0) === '-' ? 
                a.countries.length - b.countries.length : b.countries.length - a.countries.length
        );

export default countriesByContinent;