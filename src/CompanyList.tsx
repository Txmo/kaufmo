import React from 'react';
import Company from './Company';

export default function CompanyList() {

    const companyList = [];
    for (let i = 0; i < 25; ++i) {
        companyList.push(<Company key={i} companyId={i} companyName={'CmpName' + i} />)
    }

    return (
        <div className="company-list-container">
            {companyList}
        </div>
    );
}