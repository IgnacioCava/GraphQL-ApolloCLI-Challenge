const countriesByContinent = (data, query) => 
    data.continents.sort((a,b)=>a.name.localeCompare(b.name));

export default countriesByContinent;