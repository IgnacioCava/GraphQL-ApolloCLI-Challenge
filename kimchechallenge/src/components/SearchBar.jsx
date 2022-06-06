import React, { useState } from "react";
import Countries from "../Countries";

export const SearchBar = () => {

    const [searchedQuery, setQuery] = useState("");
    const [group, setGroup] = useState('Continent');
    const [sort, setSort] = useState('name');

    const Search = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }
    
    const GroupBy = (e) => {
        e.preventDefault()
        setGroup(e.target.value);
    }
    
    const SortBy = (e) => {
        e.preventDefault()
        setSort(e.target.value===sort? '-'+e.target.value : e.target.value);
    }
    
    const sortType = (type) => sort.includes(type)?sort.charAt(0)==='-'?'▲':'▼':''

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
            <div>
                Sort by: 
                <button onClick={SortBy} value='name'>Name {sortType('name')}</button>
                <button onClick={SortBy} value='amount'>Amount of countries {sortType('amount')}</button>
            </div>
            <Countries searchedQuery={searchedQuery} GroupBy={group} SortBy={sort}/>
        </div>
    );
}

export default SearchBar;