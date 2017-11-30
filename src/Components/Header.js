import React, { Component } from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
    <div className="row">
    		<Navbar inverse>
                                            <Navbar.Header>
                                                <a href="#" className="navbar-brand"><img src="logo.png"></img></a>
                                            </Navbar.Header>
                                              <Nav pullRight>
                                                <NavItem eventKey={1} href="#">Open Items</NavItem>
                                                <NavItem eventKey={2} href="#">Closed Items</NavItem>
                                                <NavItem eventKey={3} href="#">Cart</NavItem>
                                              </Nav>
                                          </Navbar>
                                          </div>
    );
  }
}

export default Header;