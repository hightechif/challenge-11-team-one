import React, { Component } from "react";

export default class SkillsPreview extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.skills.map((skill, list) => (
            <li key={list}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}
