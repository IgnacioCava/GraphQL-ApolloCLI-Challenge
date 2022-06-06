export const COUNTRIES_BY_CONTINENT = `
query getCountriesByContinent {
    continents{
        code
        name
        countries{
            name
            code
        }
    }
}
`

export const COUNTRIES_AND_LANGUAGES = `
query getCountriesLanguages {
    countries{
        name
        code
        languages{
            name
        }
    }

    languages{
        name
        code
    }
}
`