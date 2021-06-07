import React, { Component } from "react";
import classes from "../../../style/Form.module.css";
import { Container, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { saveEducation } from "../../../redux/actions/education.actions";

class FormEducations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      from: "",
      to: "",
      educations: [],
    };
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {
        ...prevState,
        school: this.props.education.school,
        degree: this.props.education.degree,
        from: this.props.education.from,
        to: this.props.education.to,
      };
    });
    // console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      educations: [
        ...this.state.educations,
        {
          school: this.state.school,
          degree: this.state.degree,
          from: this.state.from,
          to: this.state.to,
        },
      ],
      school: "",
      degree: "",
      from: "",
      to: "",
    });
    // console.log(this.state.educations);
    this.props.saveEducation(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    // console.log(this.state);
    // this.props.saveEducation(this.state);
  };

  render() {
    return (
      <div>
        <Container fluid className={classes.formeducation}>
          <h3 className="my-4">Latest Educations</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>School</Form.Label>
                  <Form.Control
                    id="school"
                    onChange={this.handleChange}
                    value={this.state.school}
                    placeholder="Enter School"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Degree</Form.Label>
                  <Form.Control
                    id="degree"
                    onChange={this.handleChange}
                    value={this.state.degree}
                    placeholder="Enter Degree"
                  />
                </Form.Group>
              </Form.Row>
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
    education: state.education,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEducation: (education) => dispatch(saveEducation(education)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEducations);
