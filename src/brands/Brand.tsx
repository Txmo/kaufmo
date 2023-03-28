import React from 'react';

interface BrandProp {
    id: number;
    name: string;
}

export default function Brand({ id, name }: BrandProp) {
    return (
        <li id={`brand-${id}`} className="brand">
            {name}
        </li>
    );
}

export type { BrandProp as BrandPropType }