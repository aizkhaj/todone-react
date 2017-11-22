import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import 'react-bootstrap';
import {withRouter} from 'react-router';

// import AuthService from '../AuthService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      token: localStorage.getItem('token') || '',
      
    }
  }

  login(username, password) {
    fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => response.json())
    .then((response) => {
      console.log('response', response);
      this.setState({username});
      this.setToken(response.token);
      this.props.history.push('/lists');
    })
    .catch((err) => {console.log('Failed!', err)});
  }

  checkLoggedIn() {
    const token = this.getToken();
    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  setToken(token) {
    localStorage.setItem('token', token);
    this.setState({
      token
    });
  }

  getToken() {
    return this.state.token;
  }

  logout() {
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username}/>
        <Main login={(username, password) => {this.login(username, password)}} getToken={this.getToken}/>
      </div>
    );
  }
}

export default withRouter(App);
