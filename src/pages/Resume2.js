import React, { Component } from "react";
import Builder from "../components/resume2/Builder";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import "../style/Resume2.css";


export default class Resume extends Component {
  render() {
    
    return (
        <div>
            <NavbarComponent />

            <Builder />

            <FooterComponent />
        </div>
    );
  }
}
