import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AppContainer from './AppContainer';

test('displays 1 specific result', () => {
    render(<AppContainer />)
    const input = screen.getByPlaceholderText(/search/i)
    fireEvent.change(input, { target: { value: "Wobenzym" } });
    const listElems = screen.queryAllByRole("listitem")
    expect(screen.queryByText(/keine suchergebnisse/i)).not.toBeInTheDocument();
    expect(listElems).toHaveLength(1);
});

test('displays 1 specific result', () => {
    render(<AppContainer />)
    const input = screen.getByPlaceholderText(/search/i)
    fireEvent.change(input, { target: { value: "Nothing to find" } });
    const listElems = screen.queryAllByRole("listitem")
    expect(screen.queryByText(/keine suchergebnisse/i)).toBeInTheDocument();
    expect(listElems).toHaveLength(1);
});