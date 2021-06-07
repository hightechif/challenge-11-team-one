import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "../../style/Navbar.module.css";
import { Link } from "react-router-dom";

function SignedOutLinks(){
    return (
      <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" justify-content-between>
          {/* <Nav className={`${classes.navLink} mr-auto`}>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav> */}
          <Nav className={`${classes.navLink} ml-auto`}>
            <Nav.Link as={Link} to='/login'>Register/Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    )
}

export default SignedOutLinks;
