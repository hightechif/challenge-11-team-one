import React, { Component } from "react";
import classes from "../../../style/Form.module.css";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { saveSkill } from "../../../redux/actions/skill.actions";

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
    // console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      skills: [...this.state.skills, this.state.skill],
      skill: "",
    });
    // console.log(this.state);
    this.props.saveSkill(this.state);
  };

  handleChange = (e) => {
    this.setState({
      skill: e.target.value,
    });
    // console.log(this.state);
    this.props.saveSkill(this.state);
  };

  render() {
    return (
      <div>
        <Container fluid className={classes.formskill}>
          <h3 className="my-4">Skills</h3>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                value={this.state.skill}
                onChange={this.handleChange}
                id="skill"
              />
              <Button variant="primary" type="submit" className={"mt-2"}>
                Add
              </Button>
            </Form.Group>
          </Form>

          {/* <form onSubmit={this.handleSubmit}>
            <input value={this.state.skill} onChange={this.handleChange} />
            <button>Add</button>
          </form> */}
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
