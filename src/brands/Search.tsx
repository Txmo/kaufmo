import React from 'react';

interface SearchProps {
    value: string;
    changeHandler(value: string): void;
}

export default function Search({value, changeHandler}: SearchProps){
    return(
        <div className="search-container">
            <input placeholder='Search...' value={value} onChange={(e) => {changeHandler(e.target.value)}} />
        </div>
    );
}