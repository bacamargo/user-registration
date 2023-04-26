import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"

export const Footer = () => {
  return (
    <footer className={Footer.footer}>
        <p>
			Developed from outer space by Bárbara Camargo &copy; 2023
	    </p>
    </footer>
  );
};

describe('Footer component', () => {
  test('renders with the correct text', () => {
    render(<Footer />);
    const textElement = screen.getByText('Developed from outer space by Bárbara Camargo © 2023');
    expect(textElement).toBeInTheDocument();
  });
});