import React, { Component } from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import Uploader from '../components/resume2/ProfPic'

export default class uploader extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Uploader />
        <FooterComponent />
      </div>
    );
  }
}
