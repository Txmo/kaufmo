import React from 'react';

interface BrandProp {
    id: number;
    name: string;
}

export default function Brand({ id, name }: BrandProp) {
    return (
        <li className="brand">
            ID: {id} <br />
            Name: {name}
        </li>
    );
}

export type { BrandProp as BrandPropType }