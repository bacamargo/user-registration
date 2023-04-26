import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input, Button } from 'reactstrap'
import "@testing-library/jest-dom"

const SigninForm = () => {
    return (
        <>
            <Input type="email" id="signinEmail" placeholder="E-mail" />
            <Input type="password" id="signinPassword" placeholder="Password" />
            <Input type="password" id="signupPassword2" placeholder="Confirm password"/>
            <Button color='secondary'>Clear</Button>
            <Button color='primary'>Log in</Button>
        </>
    )
}
	

describe('Signin form', () => {
  test('renders with the correct fields', () => {
    render(<SigninForm/>);

    const emailSigninField = screen.getByPlaceholderText('E-mail');
    const passwordSigninField = screen.getByPlaceholderText('Password');
    const confirmPasswordSigninField = screen.getByPlaceholderText('Confirm password');

    expect(emailSigninField).toBeInTheDocument();
    expect(passwordSigninField).toBeInTheDocument();
    expect(confirmPasswordSigninField).toBeInTheDocument();

    const clearSigninButton = screen.getByText('Clear');
    const loginButton = screen.getByText('Log in');

    expect(clearSigninButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    
  });
});

