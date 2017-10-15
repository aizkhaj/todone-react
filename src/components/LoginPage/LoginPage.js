import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <input type="submit" />
        </form>
        <p>Don't have an account? <Link to="RegisterPage">Create one</Link></p>
      </div>
    )
  }
}