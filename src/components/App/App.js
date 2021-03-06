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
      isLoggedIn: false
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
      this.setState({username});
      this.setToken(response.token);
      this.setState({isLoggedIn: true});
      this.props.history.push('/lists');
    })
    .catch((err) => {console.log('Failed!', err)});
  }

  newUser(username, password) {
    fetch(`${process.env.REACT_APP_BASE_URL}/user/new`, {
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
        this.props.history.push('/signin');
      })
      .catch((err) => { console.log('Failed!', err) });
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
    this.setState({username: '', token: '', isLoggedIn: false});
  }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} logout={() => {this.logout()}} isLoggedIn={this.state.isLoggedIn}/>
        <Main login={(username, password) => {this.login(username, password)}} newUser={(username, password) => {this.newUser(username, password)}} isLoggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}

export default withRouter(App);
