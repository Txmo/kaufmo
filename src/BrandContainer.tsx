import React from 'react';
import { useState } from 'react';
import type { BrandPropType } from './Brand';
import BrandList from './BrandList';
import Search from './Search';
import Trie, { TrieNode } from './Trie';
import brandJSON from './brands_nestle.json';

export default function BrandContainer() {
    const [searchInput, setSearchInput] = useState("");
    const trie = new Trie<BrandPropType>();
    //init trie
    brandJSON.forEach((brand) => {
        trie.add(brand.name, brand);
    });
    function traverseTrie(trieNode: TrieNode<BrandPropType>): Array<BrandPropType> {
        const result: Array<BrandPropType> = [];
        const stack: Array<TrieNode<BrandPropType>> = [];
        stack.push(trieNode);
        while (stack.length > 0) {
            // can it ever be undefined? stack is local, so i guess not?
            const currNode = stack.pop() as TrieNode<BrandPropType>;
            currNode.children.forEach(
                (node) => {
                    stack.push(node);
                }
            );
            if (currNode.value !== null) {
                result.push({ id: currNode.value.id, name: currNode.value.name })
            }
        }
        return result;
    }
    const [searchResult, setSearchResult] = useState(traverseTrie(trie.getRoot()));

    function search(searchTerm: string): void {
        setSearchInput(searchTerm);
        const node = trie.findNode(searchTerm);
        setSearchResult(typeof node !== "undefined" ? traverseTrie(node) : []);
    }

    return (
        <div className="brand-container">
            <BrandList brands={searchResult} />
            <Search value={searchInput} changeHandler={search} />
        </div>
    );
}