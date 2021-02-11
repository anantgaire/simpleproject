import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <Navbar
              bg="white"
              expand="lg"
              className="navbar navbar-expand-lg navbar-light bg-light"
            >
              <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">
                  Eternal
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <NavLink
                      exact
                      className="nav-link "
                      activeClassName="menu__active"
                      to="/"
                    >
                      home
                    </NavLink>
                    <NavLink
                      exact
                      className="nav-link "
                      activeClassName="menu__active"
                      to="/service"
                    >
                      services
                    </NavLink>
                    <NavLink
                      exact
                      className="nav-link "
                      activeClassName="menu__active"
                      to="/about"
                    >
                      about
                    </NavLink>
                    <NavLink
                      exact
                      className="nav-link "
                      activeClassName="menu__active"
                      to="/contact"
                    >
                      contact
                    </NavLink>
                    {/* <Nav.Link href="/home">home</Nav.Link>
                  <Nav.Link href="/service">services</Nav.Link>
                  <Nav.Link href="/about">about</Nav.Link>
                  <Nav.Link href="/contact">contact</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  </Nav>

                  {/* <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
