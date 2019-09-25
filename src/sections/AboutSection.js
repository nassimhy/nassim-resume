import React, { Component } from "react";
import Fullpage from "../component/Fullpage";
import data from "../data.json";
import { Link, Element } from "react-scroll";
import DownIcon from "../component/DownIcon";
class AboutSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <Fullpage className="second" >
          <h3 >{data.sections[0].title}</h3>

          <div className="pargraph" >
            <p>{data.sections[0].items[0].content}</p>
          </div>
        </Fullpage>
        <Element name="Skills" className="element" />
      </div>
    );
  }
}
export default AboutSection;
