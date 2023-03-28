import React from 'react';
import Brand, { BrandPropType } from './Brand';

interface BrandListProp {
    brands: Array<BrandPropType>
}

export default function BrandList({ brands }: BrandListProp) {
    const brandList: Array<JSX.Element> = [];
    brands.forEach((brand) => {
        brandList.push(<Brand key={brand.id} id={brand.id} name={brand.name} />)
    });

    return (
        <ul className="brand-list-container">
            {brands.length === 0 && <li>Keine Suchergebnisse...</li>}
            {brandList}
        </ul>
    );
}