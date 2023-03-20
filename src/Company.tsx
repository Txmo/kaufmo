import React from 'react';

interface CompanyProp {
    companyId: number;
    companyName: string;
}

export default function Company({companyId, companyName} : CompanyProp) {
    return (
        <div className="company">
            ID: {companyId} <br />
            Name: {companyName} <br />
        </div>
    );
}