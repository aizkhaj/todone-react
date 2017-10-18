import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Form, FormControl, FormGroup, Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <div>
        <Form horizontal>
          <Col mdOffset={4} md={8}>
            <h2>Sign in for a productive day.</h2>
          </Col>
          <FormGroup controlId="formHorizontalUsername">
            <Col mdOffset={4} md={4}>
              <FormControl type="username" placeholder="Username" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col mdOffset={4} md={4}>
              <FormControl type="password" placeholder="Password" />
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