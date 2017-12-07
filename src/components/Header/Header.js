import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../Header/Header.css";
import { LinkContainer } from 'react-router-bootstrap';



function LoginButton(props) {
  return (
    <LinkContainer to="/signin">
      <NavItem>
        <Button bsStyle="primary" bsSize="xs">
          Login
        </Button>
      </NavItem>
    </LinkContainer>
  );
}

function LogoutButton(props) {
  return (
    <LinkContainer to="/">
      <NavItem>
        <Button bsStyle="primary" bsSize="xs" onClick={props.onClick}>
          Logout
        </Button>
      </NavItem>
    </LinkContainer>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleLogoutClick(e) {
    this.props.logout();
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    let button = null;

    if (isLoggedIn) {
      button = <LogoutButton onClick={(e) => this.handleLogoutClick(e)} />;
    } else {
      button = <LoginButton/>;
    }

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Todone</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/lists">
              <NavItem>
                My Lists
              </NavItem>
            </LinkContainer>
          </Nav>
          
          <Nav pullRight>
            <NavItem>
              {this.props.username}
            </NavItem>  
            {button}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;