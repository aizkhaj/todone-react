import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Form, FormControl, FormGroup, Button } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <Form horizontal onSubmit={(e) => this.handleSubmit(e)}>
          <Col mdOffset={4} md={8}>
            <h2>Sign in for a productive day.</h2>
          </Col>
          <FormGroup controlId="formHorizontalUsername">
            <Col mdOffset={4} md={4}>
              <FormControl type="text" name="username" placeholder="Username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col mdOffset={4} md={4}>
              <FormControl type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col mdOffset={4} md={4}>
              <p>Don't have an account? <Link to="/register">Create one</Link></p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col mdOffset={4} md={4}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Login;