import React from 'react';
import { useState } from 'react';
import type { BrandPropType } from './Brand';
import BrandList from './BrandList';
import Search from './Search';
import Trie from './Trie';

export default function AppContainer() {
    const [searchInput, setSearchInput] = useState("");
    const trie = new Trie<BrandPropType>();
    return (
        <div className="app-container">
            <BrandList trie={trie} />
            <Search value={searchInput} changeHandler={setSearchInput} />
        </div>
    );
}