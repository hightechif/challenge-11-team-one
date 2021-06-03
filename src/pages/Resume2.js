import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Builder from "../components/resume2/Builder";
import Preview from "../components/resume2/Preview";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import "../style/Resume2.css";

export default class Resume extends Component {
  render() {
    return (
        <div>
            <NavbarComponent />

            <Builder />

            <FooterComponent />
        </div>
    );
  }
}
