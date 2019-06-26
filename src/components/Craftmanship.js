import React from "react";
import "../css/craftmanship.css";
import renderHTML from "react-render-html";
import { NavLink } from "react-router-dom";

class Craftmanship extends React.Component {
  render() {
    return (
      <div className="craftmanship" id="craftmanship">
        <div className="headers top">
          <NavLink className="mobileBack" to="">
            {""}
          </NavLink>{" "}
          Craftmanship
        </div>
        <div className="line" />
        <div className="content">
          {this.props.data ? (
            renderHTML(this.props.data.content.rendered)
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default Craftmanship;
