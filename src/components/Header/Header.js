import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import "../Header/Header.css";

class Header extends Component {
  render() {
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
            <NavItem>
              <NavLink className="" to="/lists">My Lists</NavLink>
            </NavItem>
          </Nav>
          {/* <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav> */}
          <Nav pullRight>
            <NavItem>
              <NavLink className="login-text" to="/signin">
                <Button bsStyle="primary" bsSize="xs">
                  Sign In
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;