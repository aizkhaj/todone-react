import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
