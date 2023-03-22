import React from 'react';
import Company, { CompanyPropType } from './Company';
import brandJSON from './brands_nestle.json';
import Trie from './Trie';

interface CompanyListProp {
    trie: Trie<CompanyPropType>
}

export default function CompanyList({ trie }: CompanyListProp) {
    const companyList: Array<JSX.Element> = [];
    brandJSON.forEach((company) => {
        trie.add(company.name, company);
        companyList.push(<Company key={company.id} id={company.id} name={company.name} />)
    });

    return (
        <div className="company-list-container">
            {companyList}
        </div>
    );
}