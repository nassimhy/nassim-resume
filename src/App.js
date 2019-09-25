import React, { Component } from "react";
import data from "./data.json";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import Fullpage from "./component/Fullpage";
import TitleAndIcons from "./sections/TitleAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navbar from "./component/Navbar";
import SnowStorm from "react-snowstorm";
import { Link, Element } from "react-scroll";
class App extends Component {
  state = {
    backgroundColor: "rgb(242, 242, 242);"
  };
  changeColor = () => {
    const fcolor = ["white", "pink", "green"];
    const bgcolor = ["#00004d", "#660033", "yellow"];
    if (this.state.counter > 2) {
      this.setState({
        counter: 0,
        color: fcolor[this.state.counter],
        backgroundColor: " rgb(242, 242, 242)"
      });
    } else
      this.setState({
        color: fcolor[this.state.counter],
        backgroundColor: bgcolor[this.state.counter],
        counter: this.state.counter + 1
      });
  };
  render() {
    return (
      <div className="App">
        <SnowStorm
          animationInterval={50}
          snowCharacter={"*"}
          vMaxY={2}
          vMaxX={2}
        />
        <Element name="Home" className="element" />
        <Navbar />
        <div className="changetheme">
          <img src="../image/edit.png" onClick={this.changeColor} />
        </div>
        <TitleAndIcons
          color={this.state.color}
          background={this.state.backgroundColor}
        />
        <AboutSection
          color={this.state.color}
          background={this.state.backgroundColor}
        />
        <SkillSection
          color={this.state.color}
          background={this.state.backgroundColor}
        />
      </div>
    );
  }
}

export default App;
