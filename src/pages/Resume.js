import React, { Component } from "react";
import Builder from "../components/resume/Builder";
import Preview from "../components/resume/Preview";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Builder />
        <Preview />
      </div>
    );
  }
}
