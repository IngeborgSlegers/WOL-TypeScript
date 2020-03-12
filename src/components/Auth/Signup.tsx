import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

interface Props {
  updateToken?: any;
}

interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default class Signup extends React.Component<Props, SignupState> {
  state: SignupState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    fetch('http://localhost:4000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      this.props.updateToken(data.sessionToken)
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            onChange={this.handleChange} value={this.state.firstName}
            name="firstName" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            onChange={this.handleChange} value={this.state.lastName}
            name="lastName" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={this.handleChange} value={this.state.email}
            type="email" name="email" required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={this.handleChange} value={this.state.password}
            name="password" type="password" />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    )
  }
}