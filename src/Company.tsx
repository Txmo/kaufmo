import React from 'react';

interface CompanyProp {
    id: number;
    name: string;
}

export default function Company({ id: companyId, name: companyName }: CompanyProp) {
    return (
        <div className="company">
            ID: {companyId} <br />
            Name: {companyName}
        </div>
    );
}

export type { CompanyProp as CompanyPropType }