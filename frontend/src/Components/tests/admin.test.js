import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import { Area as AreaStyle} from '../Dashboard/Title/titleStyle'


const Admin = () => 
	<AreaStyle>
		<h1 className="Admin">System administration</h1>
		<h4 className="Subtitle">This is the admin page. You can edit or remove a user from the platform. To register a new one, please create an account first in the signup page.</h4>
		<hr />
	</AreaStyle>
	

describe('Admin content', () => {
  test('renders with the correct text', () => {
    render(<Admin />);
    const titleElement = screen.getByText('System administration');
    const subtitleElement = screen.getByText('This is the admin page. You can edit or remove a user from the platform. To register a new one, please create an account first in the signup page.');
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});