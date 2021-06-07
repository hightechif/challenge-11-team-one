import React, { Component } from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import Homepage from '../components/home/home'

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Homepage />
        <FooterComponent />
      </div>
    );
  }
}
