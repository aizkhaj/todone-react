import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../Header/Header.css";
import { LinkContainer } from 'react-router-bootstrap';

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
            <LinkContainer to="/signin">
              <NavItem>
                  <Button bsStyle="primary" bsSize="xs">
                    Sign In
                  </Button>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;