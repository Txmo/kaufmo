import React from 'react';
import Company from './Company';
import brandJSON from './brands_nestle.json';

export default function CompanyList() {
    const companyList: Array<JSX.Element> = [];
    brandJSON.forEach((company) => {
        companyList.push(<Company key={company.id} companyId={company.id} companyName={company.name} />)
    });

    return (
        <div className="company-list-container">
            {companyList}
        </div>
    );
}