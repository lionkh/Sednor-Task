import React, { Component } from 'react';
import './styles.scss';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { Router, Route, browserHistory } from 'react-router'; 



export default class Header extends Component{
    render() {
    return (
      <div>
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Invoice App</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/products">Products</NavItem>
        <NavItem eventKey={2} href="/customers">Customers</NavItem>
        <NavItem eventKey={3} href="/invoices">Invoices</NavItem>
      </Nav>
    </Navbar>
      </div>

    );
  }

}