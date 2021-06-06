import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "../../style/Navbar.module.css";
import { Link } from "react-router-dom";
import { logout } from '../../redux/actions/auth.actions'
import { connect } from 'react-redux'

const SignedInLinks = (props) => {

    return (
      <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" justify-content-between>
          <Nav className={`${classes.navLink} mr-auto`}>
            <Nav.Link as={Link} to="/resume2">Resume Builder</Nav.Link>
          </Nav>
          <Nav className={`${classes.navLink} ml-auto`}>
            <Nav.Link><a href="/" onClick={props.logout}>Logout</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
