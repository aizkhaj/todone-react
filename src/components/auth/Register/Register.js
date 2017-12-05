import React, {Component} from 'react';
import {Form, FormControl, FormGroup, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Register extends Component {
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
    this.props.newUser(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <Form horizontal onSubmit={(e) => this.handleSubmit(e)}>
          <Col mdOffset={4} md={4}>
            <h2>Create an account to maximize your life.</h2>
          </Col>
          <FormGroup controlId="formHorizontalUsername">
            <Col mdOffset={4} md={4}>
              <FormControl type="text" name="username" placeholder="Username" value={this.state.username} onChange={(e) => this.handleChange(e)}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col mdOffset={4} md={4}>
              <FormControl type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
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
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Register;