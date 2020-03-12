import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


interface Props {
  updateToken?: any
}

interface LoginState {
  email: string;
  password: string;
}

export default class Login extends React.Component<Props, LoginState> {
  state: LoginState = {
    email: '',
    password: ''
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    fetch('http://localhost:4000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        user: {
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
      <Form
        onSubmit={this.handleSubmit}
      >
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
        <Button type="submit">Login</Button>
      </Form>
    )
  }
}