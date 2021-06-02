import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import Builder from "../components/resume/Builder";
import Preview from "../components/resume/Preview";
import "../style/Resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Container fluid>
          <Row>
            <Col sm={3}>
              <Builder />
            </Col>
            <Col sm={9}>
              <Preview />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
