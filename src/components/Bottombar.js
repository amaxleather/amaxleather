import React from "react";
import "../css/main.css";

class Bottombar extends React.Component {
  render() {
    return (
      <div className="bottombar">
        <div className="leftbot">
          <p id="copyright"> Copyright © AMAX Leather Inc.</p>
        </div>
        <div className="right">
          <div className="botButton" onClick={this.props.contact}>
            contact
          </div>
          <span className="linespan">|</span>
          <div className="botButton" onClick={this.props.retailers}>
            retailers
          </div>
        </div>
      </div>
    );
  }
}

export default Bottombar;
