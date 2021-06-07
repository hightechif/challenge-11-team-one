import React from "react";
import { Navbar } from "react-bootstrap";
import classes from "../style/Navbar.module.css";
import { Link } from "react-router-dom";
import SignedInLinks from '../components/auth/signedInLinks'
import SignedOutLinks from '../components/auth/signedOutLinks'
import { connect } from 'react-redux'

function NavbarComponent(props) {
  // const { authError, user } = props;
  
  const userLocalStg = JSON.parse(localStorage.getItem('user'));
  
  const links = (userLocalStg) ? <SignedInLinks/> : <SignedOutLinks />;
  return (
    <Navbar expand="lg" bg="light" className={classes.navbar} sticky="top">
      <Navbar.Brand className={classes.navbarBrand} as={Link} to="/">
          CV<strong>Generator</strong>
      </Navbar.Brand>
      { links }
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      user: state.auth.user
  }
}

export default connect(mapStateToProps)(NavbarComponent);
