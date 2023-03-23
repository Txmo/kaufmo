import React from 'react';

interface BrandProp {
    id: number;
    name: string;
}

export default function Brand({ id, name }: BrandProp) {
    return (
        <div className="brand">
            ID: {id} <br />
            Name: {name}
        </div>
    );
}

export type { BrandProp as BrandPropType }