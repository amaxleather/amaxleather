import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "../components/Slider";
import data from "../data/data.js";

class ContentScreen extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="headersContainer">
          <div className="headers top">
            <NavLink className="mobileBack" to="">
              {""}
            </NavLink>{" "}
            {this.props.data.title}
          </div>
          <div className="line" />
        </div>
        <div className="content">
          {"slider" in this.props.data && <Slider data={this.props.data.slider} />}
          {data(this.props.data.content)}
        </div>
      </div>
    );
  }
}

export default ContentScreen;
