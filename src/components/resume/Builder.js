import { Form, Col, Button, FormControl } from "react-bootstrap";
import "../../style/Resume.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { saveData } from "../../redux/actions/data.actions";

class Builder extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
  };

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
    console.log(this.state);
    this.props.saveData(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveData(this.state);
  };

  render() {
    return (
      <div className="resume">
        <div className="section1 ">
          <div className="headerSection1">
            <h3>Tittle</h3>
          </div>

          {/* //PROFILEEE  SECTIIONNNNNN */}

          <Form.Row>
            <div className="personalDetails">
              <h3>
                <input type="text" placeholder="Personal Details" />{" "}
                <i className="far fa-edit"></i>
              </h3>
            </div>
          </Form.Row>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label> First Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter First Name"
                  id="firstName"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>End Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter End Name"
                  id="lastName"
                  onChange={this.handleChange}
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
                />
              </Form.Group>

              <Form.Group as={Col} controlId="end-name">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="input" placeholder="Enter Phone Number" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            {/* PROFFESIONAL SUMMARY */}

            <Form.Row>
              <div className="proSummary">
                <h3>
                  <input type="text" placeholder="Proffesional Summary" />{" "}
                  <i className="far fa-edit"></i>
                </h3>
              </div>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="Hardworking College Student seeking employment.• Bringing forth a motivated attitude and a variety of powerful skills.•"
                />
              </Form.Group>
            </Form.Row>

            {/* SOCIAL LINNKS */}
            <Form.Row>
              <div className="socialLinks">
                <h3>
                  <input type="text" placeholder="Websites and Social Links" />{" "}
                  <i className="far fa-edit"></i>
                </h3>
              </div>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Link 1</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Link 2</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            {/* SKILLS */}

            <div className="skills">
              <Form.Row>
                <div className="skills_tittle">
                  <div className="header_skill">
                    <h3>
                      <input type="text" placeholder="Skills" />{" "}
                    </h3>
                  </div>
                  <div className="icons">
                    <h3>
                      <i className="far fa-edit"></i>
                    </h3>
                  </div>
                </div>
              </Form.Row>
              <div className="skills_left">
                <Form.Group id="formGridCheckbox">
                  <Form.Check className="m-20" type="checkbox" label="HTML5" />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                  <Form.Check className="m-20" type="checkbox" label="CSS3" />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check className="m-20" type="checkbox" label="GIT" />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check className="m-20" type="checkbox" label="REDUX" />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    className="m-20"
                    type="checkbox"
                    label="Javascript"
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check className="m-20" type="checkbox" label="GIT" />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check className="m-20" type="checkbox" label="REDUX" />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    className="m-20"
                    type="checkbox"
                    label="Javascript"
                  />
                </Form.Group>
              </div>
            </div>

            <div className="addSkills">
              <Form.Group>
                <Form.Label>Add Others Skills</Form.Label>

                <Form.Control placeholder="Add Other Skills" />
                <Button className="mt-3" variant="primary" type="submit">
                  Add Skills
                </Button>
              </Form.Group>
            </div>

            {/* EDUCATIONS */}
            <div className="educations">
              <div className="header_educations">
                <h3>
                  <input type="text" placeholder="Education" />{" "}
                  <i className="far fa-edit"></i>
                </h3>
              </div>
              <div className="form_educations">
                <div className="header_form_education">
                  <h3 className="ml-3">header</h3>
                  <hr />
                </div>
                <Form>
                  <Form.Row>
                    <Form.Group className="m-2" as={Col} controlId="first-name">
                      <Form.Label> School or University</Form.Label>
                      <Form.Control
                        type="input"
                        placeholder="Enter School/University"
                      />
                    </Form.Group>

                    <Form.Group className="m-2" as={Col} controlId="end-name">
                      <Form.Label>Degree</Form.Label>
                      <Form.Control type="input" placeholder="Enter Degree" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group className="m-2" as={Col}>
                      <Form.Label>Description</Form.Label>
                      <FormControl as="textarea" aria-label="With textarea" />
                    </Form.Group>
                  </Form.Row>

                  <div>
                    <label className="startLabel">Start :</label>
                    <DatePicker
                      className="form-control m-3"
                      selected={this.state.checkInDate}
                      minDate={new Date()}
                      onChange={this.handleCheckInDate}
                    />
                  </div>
                  <div>
                    <label className="toLabel">To :</label>
                    <DatePicker
                      className="form-control ml-3"
                      selected={this.state.checkOutDate}
                      minDate={this.state.checkInDate}
                      onChange={this.handleCheckOutDate}
                    />
                  </div>
                  <Button
                    className="sm ml-3 mb-3"
                    variant="primary"
                    type="submit"
                  >
                    Add New
                  </Button>
                </Form>
              </div>
            </div>

            <div className="experience">
              <div className="header_experience">
                <h3>
                  <input type="text" placeholder="Experience" />{" "}
                  <i className="far fa-edit"></i>
                </h3>
              </div>
              <div className="form_experience">
                <div className="header_form_experience">
                  <h3 className="ml-3">header</h3>
                  <hr />
                </div>
                <Form>
                  <Form.Row>
                    <Form.Group className="m-2" as={Col} controlId="first-name">
                      <Form.Label> Company</Form.Label>
                      <Form.Control type="input" placeholder="Enter Company" />
                    </Form.Group>

                    <Form.Group className="m-2" as={Col} controlId="end-name">
                      <Form.Label>Position</Form.Label>
                      <Form.Control type="input" placeholder="Enter Position" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group className="m-2" as={Col}>
                      <Form.Label>Description</Form.Label>
                      <FormControl as="textarea" aria-label="With textarea" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group className="m-2" as={Col} controlId="first-name">
                      <Form.Label> Start</Form.Label>
                      <Form.Control type="input" placeholder="DD-MM-YYYY" />
                    </Form.Group>

                    <Form.Group className="m-2" as={Col} controlId="end-name">
                      <Form.Label>To</Form.Label>
                      <Form.Control type="input" placeholder="DD-MM-YYYY" />
                    </Form.Group>
                  </Form.Row>
                  <Button
                    className="sm ml-3 mb-3"
                    variant="primary"
                    type="submit"
                  >
                    Add New
                  </Button>
                </Form>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (data) => dispatch(saveData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder);

// function Builder() {
//   // define check-in and check-out state
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);

//   // define handler change function on check-in date
//   const handleCheckInDate = (date) => {
//     setCheckInDate(date);
//     setCheckOutDate(null);
//   };

//   // define handler change function on check-out date
//   const handleCheckOutDate = (date) => {
//     setCheckOutDate(date);
//   };

//   return (
//     <div className="resume">
//       <div className="section1 ">
//         <div className="headerSection1">
//           <h3>Tittle</h3>
//         </div>

//         {/* //PROFILEEE  SECTIIONNNNNN */}

//         <Form.Row>
//           <div className="personalDetails">
//             <h3>
//               <input type="text" placeholder="Personal Details" />{" "}
//               <i className="far fa-edit"></i>
//             </h3>
//           </div>
//         </Form.Row>
//         <Form>
//           <Form.Row>
//             <Form.Group as={Col} controlId="first-name">
//               <Form.Label> First Name</Form.Label>
//               <Form.Control type="input" placeholder="Enter First Name" />
//             </Form.Group>

//             <Form.Group as={Col} controlId="end-name">
//               <Form.Label>End Name</Form.Label>
//               <Form.Control type="input" placeholder="Enter End Name" />
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="first-name">
//               <Form.Label> Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter Email" />
//             </Form.Group>

//             <Form.Group as={Col} controlId="end-name">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control type="input" placeholder="Enter Phone Number" />
//             </Form.Group>
//           </Form.Row>

//           <Form.Group controlId="formGridAddress1">
//             <Form.Label>Address</Form.Label>
//             <Form.Control placeholder="1234 Main St" />
//           </Form.Group>

//           <Form.Group controlId="formGridAddress2">
//             <Form.Label>Address 2</Form.Label>
//             <Form.Control placeholder="Apartment, studio, or floor" />
//           </Form.Group>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridCity">
//               <Form.Label>City</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridState">
//               <Form.Label>State</Form.Label>
//               <Form.Control as="select" defaultValue="Choose...">
//                 <option>Choose...</option>
//                 <option>Indonesia</option>
//                 <option>Malaysia</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridZip">
//               <Form.Label>Zip Code</Form.Label>
//               <Form.Control />
//             </Form.Group>
//           </Form.Row>

//           {/* PROFFESIONAL SUMMARY */}

//           <Form.Row>
//             <div className="proSummary">
//               <h3>
//                 <input type="text" placeholder="Proffesional Summary" />{" "}
//                 <i className="far fa-edit"></i>
//               </h3>
//             </div>
//           </Form.Row>
//           <Form.Row>
//             <Form.Group as={Col}>
//               <FormControl
//                 as="textarea"
//                 aria-label="With textarea"
//                 placeholder="Hardworking College Student seeking employment.• Bringing forth a motivated attitude and a variety of powerful skills.•"
//               />
//             </Form.Group>
//           </Form.Row>

//           {/* SOCIAL LINNKS */}
//           <Form.Row>
//             <div className="socialLinks">
//               <h3>
//                 <input type="text" placeholder="Websites and Social Links" />{" "}
//                 <i className="far fa-edit"></i>
//               </h3>
//             </div>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridCity">
//               <Form.Label>Link 1</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridZip">
//               <Form.Label>Link 2</Form.Label>
//               <Form.Control />
//             </Form.Group>
//           </Form.Row>

//           {/* SKILLS */}

//           <div className="skills">
//             <Form.Row>
//               <div className="skills_tittle">
//                 <div className="header_skill">
//                   <h3>
//                     <input type="text" placeholder="Skills" />{" "}
//                   </h3>
//                 </div>
//                 <div className="icons">
//                   <h3>
//                     <i className="far fa-edit"></i>
//                   </h3>
//                 </div>
//               </div>
//             </Form.Row>
//             <div className="skills_left">
//               <Form.Group id="formGridCheckbox">
//                 <Form.Check className="m-20" type="checkbox" label="HTML5" />
//               </Form.Group>

//               <Form.Group id="formGridCheckbox">
//                 <Form.Check className="m-20" type="checkbox" label="CSS3" />
//               </Form.Group>
//               <Form.Group id="formGridCheckbox">
//                 <Form.Check className="m-20" type="checkbox" label="GIT" />
//               </Form.Group>
//               <Form.Group id="formGridCheckbox">
//                 <Form.Check className="m-20" type="checkbox" label="REDUX" />
//               </Form.Group>
//               <Form.Group id="formGridCheckbox">
//                 <Form.Check
//                   className="m-20"
//                   type="checkbox"
//                   label="Javascript"
//                 />
//               </Form.Group>
//               <Form.Group id="formGridCheckbox">
//                 <Form.Check className="m-20" type="checkbox" label="GIT" />
//               </Form.Group>
//               <Form.Group id="formGridCheckbox">
//                 <Form.Check className="m-20" type="checkbox" label="REDUX" />
//               </Form.Group>
//               <Form.Group id="formGridCheckbox">
//                 <Form.Check
//                   className="m-20"
//                   type="checkbox"
//                   label="Javascript"
//                 />
//               </Form.Group>
//             </div>
//           </div>

//           <div className="addSkills">
//             <Form.Group>
//               <Form.Label>Add Others Skills</Form.Label>

//               <Form.Control placeholder="Add Other Skills" />
//               <Button className="mt-3" variant="primary" type="submit">
//                 Add Skills
//               </Button>
//             </Form.Group>
//           </div>

//           {/* EDUCATIONS */}
//           <div className="educations">
//             <div className="header_educations">
//               <h3>
//                 <input type="text" placeholder="Education" />{" "}
//                 <i className="far fa-edit"></i>
//               </h3>
//             </div>
//             <div className="form_educations">
//               <div className="header_form_education">
//                 <h3 className="ml-3">header</h3>
//                 <hr />
//               </div>
//               <Form>
//                 <Form.Row>
//                   <Form.Group className="m-2" as={Col} controlId="first-name">
//                     <Form.Label> School or University</Form.Label>
//                     <Form.Control
//                       type="input"
//                       placeholder="Enter School/University"
//                     />
//                   </Form.Group>

//                   <Form.Group className="m-2" as={Col} controlId="end-name">
//                     <Form.Label>Degree</Form.Label>
//                     <Form.Control type="input" placeholder="Enter Degree" />
//                   </Form.Group>
//                 </Form.Row>

//                 <Form.Row>
//                   <Form.Group className="m-2" as={Col}>
//                     <Form.Label>Description</Form.Label>
//                     <FormControl as="textarea" aria-label="With textarea" />
//                   </Form.Group>
//                 </Form.Row>

//                 <div>
//                   <label className="startLabel">Start :</label>
//                   <DatePicker
//                     className="form-control m-3"
//                     selected={checkInDate}
//                     minDate={new Date()}
//                     onChange={handleCheckInDate}
//                   />
//                 </div>
//                 <div>
//                   <label className="toLabel">To :</label>
//                   <DatePicker
//                     className="form-control ml-3"
//                     selected={checkOutDate}
//                     minDate={checkInDate}
//                     onChange={handleCheckOutDate}
//                   />
//                 </div>
//                 <Button
//                   className="sm ml-3 mb-3"
//                   variant="primary"
//                   type="submit"
//                 >
//                   Add New
//                 </Button>
//               </Form>
//             </div>
//           </div>

//           <div className="experience">
//             <div className="header_experience">
//               <h3>
//                 <input type="text" placeholder="Experience" />{" "}
//                 <i className="far fa-edit"></i>
//               </h3>
//             </div>
//             <div className="form_experience">
//               <div className="header_form_experience">
//                 <h3 className="ml-3">header</h3>
//                 <hr />
//               </div>
//               <Form>
//                 <Form.Row>
//                   <Form.Group className="m-2" as={Col} controlId="first-name">
//                     <Form.Label> Company</Form.Label>
//                     <Form.Control type="input" placeholder="Enter Company" />
//                   </Form.Group>

//                   <Form.Group className="m-2" as={Col} controlId="end-name">
//                     <Form.Label>Position</Form.Label>
//                     <Form.Control type="input" placeholder="Enter Position" />
//                   </Form.Group>
//                 </Form.Row>

//                 <Form.Row>
//                   <Form.Group className="m-2" as={Col}>
//                     <Form.Label>Description</Form.Label>
//                     <FormControl as="textarea" aria-label="With textarea" />
//                   </Form.Group>
//                 </Form.Row>

//                 <Form.Row>
//                   <Form.Group className="m-2" as={Col} controlId="first-name">
//                     <Form.Label> Start</Form.Label>
//                     <Form.Control type="input" placeholder="DD-MM-YYYY" />
//                   </Form.Group>

//                   <Form.Group className="m-2" as={Col} controlId="end-name">
//                     <Form.Label>To</Form.Label>
//                     <Form.Control type="input" placeholder="DD-MM-YYYY" />
//                   </Form.Group>
//                 </Form.Row>
//                 <Button
//                   className="sm ml-3 mb-3"
//                   variant="primary"
//                   type="submit"
//                 >
//                   Add New
//                 </Button>
//               </Form>
//             </div>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Builder;
