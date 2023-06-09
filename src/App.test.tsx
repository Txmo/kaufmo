import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders at least one company', () => {
  render(<App />);
  const element = screen.getByText(/Bear Brand Sterilized/i);
  expect(element).toBeInTheDocument();
});

test('renders the search field', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Search\.\.\./i);
  expect(input).toBeInTheDocument();
})