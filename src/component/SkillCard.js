import React, { Component } from "react";
import "./Fullpage.css";
class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <div className="image-skill">
          <img src={skill.content.image} alt="" />
        </div>
        <div className="title-skill">
          <h4>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
export default SkillCard;
