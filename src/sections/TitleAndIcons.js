import React, { Component } from "react";
import Fullpage from "../component/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../component/DownIcon";
import { Link, Element } from "react-scroll";

class TitleAndIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Fullpage className="first" >
          <h1 className="title">{data.title}</h1>
          <div className="subtitle">
            <h2 className="subtext" >{data.subtitle}</h2>
          </div>
          <div className="linkItems">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icons">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={100}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="About" className="element"></Element>
      </div>
    );
  }
}
export default TitleAndIcon;
