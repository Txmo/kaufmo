import React from 'react';
import { useState } from 'react';
import CompanyList from './CompanyList';
import Search from './Search';

export default function AppContainer(){
    const [searchInput, setSearchInput] =  useState("");
    return (
        <div className="app-container">
            <CompanyList />
            <Search value={searchInput} changeHandler={setSearchInput} />
        </div>
    );
}