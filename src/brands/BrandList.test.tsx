import React from 'react';
import { render, screen } from '@testing-library/react';
import BrandList from './BrandList';
import { BrandPropType } from './Brand';

test('displays no results found', () => {
    render(<BrandList brands={[]} />)
    expect(screen.getByText(/Keine Suchergebnisse/i)).toBeInTheDocument();
});

test('does NOT display no results found', () => {
    const brands: Array<BrandPropType> = [];
    brands.push({ id: 1, name: "dummy-1" });
    brands.push({ id: 2, name: "dummy-2" });
    render(<BrandList brands={brands} />)
    expect(screen.queryByText(/Keine Suchergebnisse/i)).not.toBeInTheDocument();
});

test('displays 1 dummy brand', () => {
    const brands: Array<BrandPropType> = [];
    brands.push({ id: 1, name: "dummy-1" });
    render(<BrandList brands={brands} />)
    const brandElems = screen.queryAllByText(/dummy/i)
    expect(brandElems).toHaveLength(1);
});

test('displays 5 dummy brand', () => {
    const brands: Array<BrandPropType> = [];
    for (let i = 1; i <= 5; ++i) {
        brands.push({ id: i, name: `dummy-${i}` })
    }
    render(<BrandList brands={brands} />)
    const brandElems = screen.queryAllByText(/dummy/i)
    expect(brandElems).toHaveLength(5);
});