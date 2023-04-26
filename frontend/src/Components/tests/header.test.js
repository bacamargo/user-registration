import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"

export const Header = () => {
  return (
    <header className={Header.header}>
      <h1>User Registration</h1>
    </header>
  );
};

describe('Header component', () => {
  test('renders with the correct title', () => {
    render(<Header />);
    const titleElement = screen.getByText('User Registration');
    expect(titleElement).toBeInTheDocument();
  });
});