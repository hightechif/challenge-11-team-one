import { Form, Col, FormControl } from "react-bootstrap";
import "../../style/Resume2.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { Component } from "react";
// import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { saveData } from "../../redux/actions/data.actions";
import Preview from "../resume2/Preview";
import FormSkills from "../resume2/skill/FormSkills";
import FormEducations from "./education/FormEducations";
import FormExperiences from "./experience/FormExperiences";
// import Profpic from './ProfPic'
import { Redirect } from 'react-router'

class Builder extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    profSummary: "",
    webLinks: "",
    checkInDate: "",
    checkOutDate: "",
    profpic: ""
  };

  componentDidMount() {
    this.setState((prevState) => {
      return {
        ...prevState,
        firstName: this.props.data.firstName,
        lastName: this.props.data.lastName,
        email: this.props.data.email,
        phone: this.props.data.phone,
        address: this.props.data.address,
        address2: this.props.data.address2,
        city: this.props.data.city,
        state: this.props.data.state,
        zipCode: this.props.data.zipCode,
        profSummary: this.props.data.profSummary,
        webLinks: this.props.data.webLinks,
        webLinks2: this.props.data.webLinks2,
        profpic: this.props.data.profpic
      };
    });
  }

  handleCheckInDate = (date) => {
    return this.setState({
      checkInDate: date,
      checkOutDate: null,
    });
  };

  // define handler change function on check-out date
  handleCheckOutDate = (date) => {
    return this.setState({
      checkOutDate: date,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    // console.log(this.state);
    this.props.saveData(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveData(this.state);
  };

  render() {
    const { user } = this.props
    if (!user) return <Redirect to='/login' /> 

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 py-4">
              <div className="col-md-10 mx-auto">
                <form onSubmit={this.handleSubmit}>
                  <div className="personal-details">
                    <h3 className="mb-3">Personal Details</h3>
                    {/* <Profpic /> */}
                    <Form.Row className="mt-4">
                      <Form.Group as={Col}>
                        <Form.Label> First Name</Form.Label>
                        <Form.Control
                          type="input"
                          placeholder="Enter First Name"
                          id="firstName"
                          onChange={this.handleChange}
                          value={this.state.firstName}
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="input"
                          placeholder="Enter Last Name"
                          id="lastName"
                          onChange={this.handleChange}
                          value={this.state.lastName}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label> Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          id="email"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="input"
                          placeholder="Enter Phone Number"
                          id="phone"
                          onChange={this.handleChange}
                          value={this.state.phone}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="input"
                        placeholder="1234 Main St"
                        id="address"
                        onChange={this.handleChange}
                        value={this.state.address}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control
                        placeholder="Apartment, studio, or floor"
                        id="address2"
                        onChange={this.handleChange}
                        value={this.state.address2}
                      />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          placeholder="Insert City"
                          id="city"
                          onChange={this.handleChange}
                          value={this.state.city}
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          as="select"
                          defaultValue="Choose..."
                          id="state"
                          onChange={this.handleChange}
                          value={this.state.state}
                        >
                          <option>Choose...</option>
                          <option>Indonesia</option>
                          <option>Malaysia</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          id="zipCode"
                          onChange={this.handleChange}
                          value={this.state.zipCode}
                        />
                      </Form.Group>
                    </Form.Row>

                    <button type="submit" class="btn btn-primary mt-2">
                      Save Data
                    </button>


                    {/* PROFESIONAL SUMMARY */}

                    <Form.Row>
                      <div className="proSummary">
                        <h3 className="my-3">Profesional Summary</h3>
                      </div>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <FormControl
                          id="profSummary"
                          onChange={this.handleChange}
                          as="textarea"
                          aria-label="With textarea"
                          placeholder="Hardworking College Student seeking employment.• Bringing forth a motivated attitude and a variety of powerful skills.•"
                        />
                      </Form.Group>
                    </Form.Row>

                    <button type="submit" class="btn btn-primary mt-2">
                      Save Data
                    </button>

                    {/* SOCIAL LINNKS */}
                    <Form.Row>
                      <div className="socialLinks">
                        <h3 className="my-4">Websites and Social Links</h3>
                      </div>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Link 1</Form.Label>
                        <Form.Control
                          type="input"
                          id="webLinks"
                          onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Link 2</Form.Label>
                        <Form.Control
                          id="webLinks2"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form.Row>

                    <button type="submit" class="btn btn-primary mt-2">
                      Save Data
                    </button>
                  </div>
                </form>
                <FormSkills />
                <FormEducations />
                <FormExperiences />
              </div>
            </div>
            <div className="spacePreview  col-md-6 ">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    data: state.data,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (data) => dispatch(saveData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder);
