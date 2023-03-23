import React from 'react';
import Brand, { BrandPropType } from './Brand';
import brandJSON from './brands_nestle.json';
import Trie from './Trie';

interface BrandListProp {
    trie: Trie<BrandPropType>
}

export default function BrandList({ trie }: BrandListProp) {
    const brandList: Array<JSX.Element> = [];
    brandJSON.forEach((brand) => {
        trie.add(brand.name, brand);
        brandList.push(<Brand key={brand.id} id={brand.id} name={brand.name} />)
    });

    return (
        <div className="company-list-container">
            {brandList}
        </div>
    );
}