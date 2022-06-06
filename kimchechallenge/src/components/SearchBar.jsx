import React, { useState } from "react";
import Countries from "../Countries";

export const SearchBar = () => {

    const [query, setQuery] = useState("");
    const [group, setGroup] = useState('Continent');

    const Search = (e) => {
        e.preventDefault();
        setQuery(e.target.value.trim());
    }

    const GroupBy = (e) => {
        e.preventDefault()
        setGroup(e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder={`Search by ${group}`}
                onChange={Search}
            />
            <div>
                Group by: 
                <button onClick={GroupBy} value='Continent'>Continent</button>
                <button onClick={GroupBy} value='Language'>Language</button>
            </div>
            <Countries query={query} GroupBy={group}/>
        </div>
    );
}

export default SearchBar;