import React, { useState } from "react";
import Countries from "../../Countries";
import { Mag, AppWrapper, Input, DivInput } from "./styles";
import mag from "../../assets/mag.png";
import Options from "../options/Options.jsx";
import sortType from "../../helpers/sortType";

export const SearchBar = () => {

    const [searchedQuery, setQuery] = useState("");
    const [group, setGroup] = useState('continent');
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

    return (
        <AppWrapper>
            <h1>Country search</h1>
            <DivInput>
                <Mag src={mag} alt="mag" />
                <Input
                    type="text"
                    placeholder={'Search by country'}
                    onChange={Search}
                />
            </DivInput>

            <Options highlight={group} label='Group by:' options={[
                {value:'continent', onClick:GroupBy},
                {value:'language', onClick:GroupBy}
            ]}/>
            <Options label='Sort by:' options={[
                {value:'name', text:`Name ${sortType('name', sort)}`, onClick:SortBy},
                {value:'amount', text:`Country count ${sortType('amount', sort)}`, onClick:SortBy}
            ]}/>
            <Countries searchedQuery={searchedQuery} GroupBy={group} SortBy={sort}/>
        </AppWrapper>
    );
}

export default SearchBar;

