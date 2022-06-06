const countriesByLanguage = (data, query) => 
    data.languages.map(language=>{
        return {
            ...language, 
            countries: data.countries
                        .filter(country=>country.languages.map(e=>e.name).includes(language.name))
                        .sort((a,b)=>a.name.localeCompare(b.name))
    }})


export default countriesByLanguage;