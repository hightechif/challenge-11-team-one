import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "../style/Navbar.module.css";
import { Link } from "react-router-dom";
import SignedInLinks from '../components/auth/signedInLinks'
import SignedOutLinks from '../components/auth/signedOutLinks'
import { connect } from 'react-redux'

function NavbarComponent(props) {
  const { authError, user } = props;

  const links = user ? <SignedInLinks/> : <SignedOutLinks />;
  return (
    <Navbar expand="lg" bg="light" className={classes.navbar} sticky="top">
      <Navbar.Brand className={classes.navbarBrand} as={Link} to="/">
          TEAM <strong>O.N.E</strong>
      </Navbar.Brand>
      { links }
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return {
      // authError: state.auth.authError,
      // user: state.auth.user
  }
}

export default connect(mapStateToProps)(NavbarComponent);
