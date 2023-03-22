import React from 'react';
import wikiDom from './WikiDom';


export default function WikiBrands() {
    return (
        <div dangerouslySetInnerHTML={{ __html: wikiDom }}>
        </div>
    );
}