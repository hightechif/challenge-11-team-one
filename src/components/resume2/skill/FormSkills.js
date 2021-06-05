import React, { Component } from "react";
import SkillsPreview from "./SkillsPreview";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { saveSkill } from "../../../redux/actions/skill.actions";
import NavbarComponent from "../../NavbarComponent";

class FormSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      skills: [],
    };
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {
        ...prevState,
        skills: this.props.skill.skills,
      };
    });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      skills: [...this.state.skills, this.state.skill],
      skill: "",
    });
    console.log(this.state);
    this.props.saveSkill(this.state);
  };

  handleChange = (e) => {
    this.setState({
      skill: e.target.value,
    });
    console.log(this.state);
    this.props.saveSkill(this.state);
  };

  render() {
    return (
      <div>
        <NavbarComponent />
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

const mapStateToProps = (state) => {
  return {
    skill: state.skill,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveSkill: (skill) => dispatch(saveSkill(skill)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSkills);
