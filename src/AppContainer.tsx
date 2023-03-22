import React from 'react';
import { useState } from 'react';
import type { CompanyPropType } from './Company';
import CompanyList from './CompanyList';
import Search from './Search';
import Trie from './Trie';

export default function AppContainer() {
    const [searchInput, setSearchInput] = useState("");
    const trie = new Trie<CompanyPropType>();
    return (
        <div className="app-container">
            <CompanyList trie={trie} />
            <Search value={searchInput} changeHandler={setSearchInput} />
        </div>
    );
}