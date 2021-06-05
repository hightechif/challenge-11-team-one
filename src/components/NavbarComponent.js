import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "../style/Navbar.module.css";
import { Link } from "react-router-dom";

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" className={classes.navbar} sticky="top">
        <Navbar.Brand className={classes.navbarBrand}>
          <Link to="/">
            TEAM <strong>O.N.E</strong>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" justify-content-between>
          <Nav className={`${classes.navLink} mr-auto`}>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/resume">Resume</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/resume2">Resume2</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/formskill">Skills</Link>
            </Nav.Link>
          </Nav>
          <Nav className={`${classes.navLink} ml-auto`}>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
