import React, {Component} from 'react';
import {Form, FormControl, FormGroup, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        <Form horizontal>
          <Col mdOffset={4} md={4}>
            <h2>Create an account to maximize your life.</h2>
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
              <p>Already have an account? <Link to="/signin">Sign in</Link></p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col mdOffset={4} md={4}>
              <Button type="submit">
                SUBMIT
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Register;