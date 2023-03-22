import React from 'react';

interface CompanyProp {
    companyId: number;
    companyName: string;
}

export default function Company({ companyId: companyId, companyName: companyName }: CompanyProp) {
    return (
        <div className="company">
            ID: {companyId} <br />
            Name: {companyName}
        </div>
    );
}