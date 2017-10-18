import React, { Component } from 'react';
import {Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Col mdOffset={2} md={8}>
          <h1>This is going to be the mother (and father) of all To-Do apps.</h1>
            <Link to="/register">
              <Button bsStyle="primary" bsSize="lg">
                Get Started
              </Button>
            </Link>
        </Col>
      </div>
    );
  }
}

export default HomePage;