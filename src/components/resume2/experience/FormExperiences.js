import React, { Component } from "react";
import classes from "../../../style/Form.module.css";
import { Container, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { saveExperience } from "../../../redux/actions/experience.actions";

class FormExperiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      description: "",
      from: "",
      to: "",
      experiences: [],
    };
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {
        ...prevState,
        company: this.props.experience.company,
        position: this.props.experience.position,
        description: this.props.experience.description,
        from: this.props.experience.from,
        to: this.props.experience.to,
      };
    });
    // console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      experiences: [
        ...this.state.experiences,
        {
          company: this.state.company,
          position: this.state.position,
          description: this.state.description,
          from: this.state.from,
          to: this.state.to,
        },
      ],
      company: "",
      position: "",
      description: "",
      from: "",
      to: "",
    });
    // console.log(this.state.experiences);
    this.props.saveExperience(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    // console.log(this.state);
    this.props.saveExperience(this.state);
  };

  render() {
    return (
      <div>
        <Container fluid className={classes.formexperience}>
          <h3 className="my-4">Latest Experience</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    id="company"
                    onChange={this.handleChange}
                    value={this.state.company}
                    placeholder="Enter Company"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    id="position"
                    onChange={this.handleChange}
                    value={this.state.position}
                    placeholder="Enter Position"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  id="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                  placeholder="Enter Description"
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    id="from"
                    onChange={this.handleChange}
                    value={this.state.from}
                    type="date"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    id="to"
                    onChange={this.handleChange}
                    value={this.state.to}
                    type="date"
                  />
                </Form.Group>
              </Form.Row>
              <Button variant="primary" type="submit" className={"mt-2"}>
                Save Data
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    experience: state.experience,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveExperience: (experience) => dispatch(saveExperience(experience)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExperiences);
