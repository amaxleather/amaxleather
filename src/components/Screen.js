import React from "react";
import "../css/about.css";
import renderHTML from "react-render-html";
import { NavLink } from "react-router-dom";
import Slider from "../components/Slider";

class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="headers top">
          <NavLink className="mobileBack" to="">
            {""}
          </NavLink>{" "}
          About
        </div>
        <div className="line" />
        <div className="content">
          <Slider />
          {renderHTML(this.props.data.content)}
        </div>
      </div>
    );
  }
}

export default About;
