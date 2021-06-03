import React, { Component } from "react";
import "../../style/Resume.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Preview extends Component {
  render() {
    return (
      <div className="section2 sticky-top">
        <div className="headerSection2 ">
          <div className="check_tasks" mt-1>
            <i className="fas fa-check-circle"></i> {"Saved "}
          </div>
          <div className="pagination">
            <button className="mr-3">
              <i className="fas fa-angle-left"></i>
            </button>

            <div className="text_pages mt-1">
              <p>1 / 3</p>
            </div>

            <button className="ml-4">
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <div className="button-close mt-3 ml-5">
            <Link to="/">
              <i className="fas fa-times  ml-2"></i>
            </Link>
          </div>
        </div>

        <div className="mainSection2 ml-5 mt-0">
          <div className="mainLeft ">
            {/* PERSONAL DETAILS */}
            <div className="personal-details ml-4 mr-2 mt-5">
              <h5>{this.props.data.firstName}</h5>
              <h5> {this.props.data.lastName}</h5>
              <div className="details ml-3 mb-0 mt-3">
                {" "}
                Details
                <p className=" email-cv ">{this.props.data.email} </p>
                <p className=" phone-cv  ">{this.props.data.phone} </p>
                <p className=" address-cv ml-auto ">
                  {this.props.data.address}
                </p>
                <p className=" address2-cv ml-auto ">
                  {this.props.data.address2}
                </p>
                <p className=" city-cv ml-auto ">{this.props.data.city} </p>
                <p className=" state-cv ml-auto ">{this.props.data.state} </p>
                <p className=" zipCode-cv ml-auto ">
                  {this.props.data.zipCode}{" "}
                </p>
              </div>

              {/* WEBSITE LINNKS */}
              <div className="addLinks ml-3 mb-0 mt-3">
                {" "}
                Links
                <p className=" links1 ">{this.props.data.webLinks} </p>
                <p className=" links2  ">{this.props.data.webLinks2} </p>
              </div>

              {/* SKILLS */}
              <div className="details ml-3 mb-0 mt-3">
                {" "}
                Skills
                <p className=" skills1 "></p>
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN */}
          <div className="mainRight">
            <div className="profSumm ml-3 mb-0 mt-3">
              <h5> Proffesional Summary</h5>
              <p>descriptions:{this.props.data.profSummary} </p>
            </div>

            <div className="educations ml-3 mb-0 mt-5">
              <h5> Educations</h5>
              <p className=""> School : </p>
              <p className=""> Degree : </p>
              <p className=""> Descripstion : </p>
              <p className=""> Start : </p>
              <p className=""> To : </p>
            </div>

            <div className="experience ml-3 mb-0 mt-3">
              <h5> Experience</h5>
              <p className=""> Company : </p>
              <p className=""> Position : </p>
              <p className=""> Descripstion : </p>
              <p className=""> Start : </p>
              <p className=""> To : </p>
            </div>
          </div>
        </div>

        {/* BUTTON  DOWNLOAD*/}
        <div className="buttom-section2">
          <div className="buttom-left mb-3">
            <Button>
              <i className="fas fa-palette fa-2x"></i> Choose Template
            </Button>
          </div>
          <div className="buttom-right mb-3">
            <Button>
              <i className="far fa-file-pdf fa-2x"></i> Download
            </Button>
          </div>
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

export default connect(mapStateToProps)(Preview);
