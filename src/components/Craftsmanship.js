import React from "react";
import "../css/craftsmanship.css";
import renderHTML from "react-render-html";
import { NavLink } from "react-router-dom";

class Craftsmanship extends React.Component {
  render() {
    return (
      <div className="craftsmanship" id="craftsmanship">
        <div className="headers top">
          <NavLink className="mobileBack" to="">
            {""}
          </NavLink>{" "}
          Craftsmanship
        </div>
        <div className="line" />
        <div className="content">
          {renderHTML(this.props.data.content)}
        </div>
      </div>
    );
  }
}

export default Craftsmanship;
