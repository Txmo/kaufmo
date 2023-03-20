import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders at least one company', () => {
  render(<App />);
  const element = screen.getByText(/CmpName0/i);
  expect(element).toBeInTheDocument();
});

test('renders the search field', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Search\.\.\./i);
  expect(input).toBeInTheDocument();
})