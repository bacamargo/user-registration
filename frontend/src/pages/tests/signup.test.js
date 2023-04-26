import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input, Button } from 'reactstrap'
import "@testing-library/jest-dom"

const SignupForm = () => {
    return (
        <>
        <Input type="text" id="signupName" placeholder="Name" />
        <Input type="email" id="signupEmail" placeholder="Email" />
        <Input type="password" id="signupPassword1" placeholder="Password" />
        <Input type="password" id="signupPassword2" placeholder="Confirm password"/>
        <Button color='secondary'>Clear</Button>
        <Button color='primary'>Register</Button>
        </>
    )
  }
  
  describe('Signup form', () => {
    test('renders with the correct fields', () => {
        render(<SignupForm />);
  
            const nameSignuPField = screen.getByPlaceholderText('Name');
            const emailSignupField = screen.getByPlaceholderText('Email');
            const passwordSignupField = screen.getByPlaceholderText('Password');
            const confirmSignupPasswordField = screen.getByPlaceholderText('Confirm password');
  
            expect(nameSignuPField).toBeInTheDocument();
            expect(emailSignupField).toBeInTheDocument();
            expect(passwordSignupField).toBeInTheDocument();
            expect(confirmSignupPasswordField).toBeInTheDocument();
  
            const clearSignupButton = screen.getByText('Clear');
            const registerSignupButton = screen.getByText('Register');
  
            expect(clearSignupButton).toBeInTheDocument();
            expect(registerSignupButton).toBeInTheDocument();
    });
  });