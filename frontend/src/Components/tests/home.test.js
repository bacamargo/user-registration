import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import { Area as AreaStyle} from '../Dashboard/Title/titleStyle'


const Home = () => 
	<AreaStyle>
		<h1 className="Title">Home</h1>
		<h4 className="Subtitle">Welcome. Here you can see the list of users registered on this platform. You can update or delete a user only if you are an admin.</h4>
		<hr />
	</AreaStyle>
	

describe('Homepage content', () => {
  test('renders with the correct content', () => {
    render(<Home />);
    const titleElement = screen.getByText('Home');
    const subtitleElement = screen.getByText('Welcome. Here you can see the list of users registered on this platform. You can update or delete a user only if you are an admin.');
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});