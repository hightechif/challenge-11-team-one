import React, { Component } from "react";
import SkillsPreview from "./SkillsPreview";
import { Container, Row, Col } from "react-bootstrap";

class FormSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      skills: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      skills: [...this.state.skills, this.state.skill],
      skill: "",
    });
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      skill: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md={6}>
              <h1>Skills</h1>
              <form onSubmit={this.handleSubmit}>
                <input value={this.state.skill} onChange={this.handleChange} />
                <button>Add</button>
              </form>
            </Col>
            <Col md={6}>
              <SkillsPreview skills={this.state.skills} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FormSkills;
