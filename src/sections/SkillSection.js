import React, { Component } from "react";
import Fullpage from "../component/Fullpage";
import data from "../data.json";
import SkillCard from "../component/SkillCard";
import UpScroll from "../component/UpScroll";
class SkillSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Fullpage className="first" >
          <h3 className="h3">{data.sections[1].title}</h3>

          <div className="cardWrapper">
            {data.sections[1].items.map(eachSkill => {
              return <SkillCard skill={eachSkill} />;
            })}
          </div>
        </Fullpage>
        <UpScroll />
      </div>
    );
  }
}
export default SkillSection;
