import React, { Component } from "react";
import { connect } from "react-redux";

class SkillsPreview extends Component {
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

const mapStateToProps = (state) => {
  return {
    skill: state.skill,
  };
};

export default connect(mapStateToProps)(SkillsPreview);
