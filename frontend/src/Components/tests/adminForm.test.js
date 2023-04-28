import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input, Button, Label, CustomInput } from 'reactstrap'
import "@testing-library/jest-dom"

const AdminForm = () => {
    return (
        <>
            <Input type='email' name='email' id='inputEmail' placeholder='E-mail'/>
            <Input name='name' id='inputName-User' placeholder='User name'/>
            <Input type='password' name='password' id='inputPassword1' placeholder='Password' />
            <Input type='password' name='passwordConfirm' id='inputPassword2' placeholder='Confirm password' />
            <Label check>
                <CustomInput type='switch' id='switch-adm' name='admin' label='Admin'/> 
            </Label>
            <Button color='secondary'>Cancel</Button>
            <Button color='primary'>Save</Button>
        </>
    )
}
	

describe('Admin form', () => {
  test('renders with the correct fields', () => {
    render(<AdminForm/>);

    const emailField = screen.getByPlaceholderText('E-mail');
    const userNameField = screen.getByPlaceholderText('User name');
    const passwordField = screen.getByPlaceholderText('Password');
    const confirmPasswordField = screen.getByPlaceholderText('Confirm password');
    const switchAdmin = screen.getByLabelText('Admin');

    expect(emailField).toBeInTheDocument();
    expect(userNameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(confirmPasswordField).toBeInTheDocument();
    expect(switchAdmin).toBeInTheDocument();

    const cancelButton = screen.getByText('Cancel');
    const saveButton = screen.getByText('Save');

    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    
  });
});