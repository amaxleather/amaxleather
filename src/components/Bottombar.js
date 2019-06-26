import React from "react";
// import { NavLink } from "react-router-dom";
import "../css/main.css";

class Bottombar extends React.Component {
  render() {
    return (
      <div className="bottombar">
        <div className="leftbot">
          {/* <div className="botButton" onClick={this.props.contact}>
            <p>contact </p>
          </div> */}
          <a
            className="botButton"
            href="http://amaxleather.com/dealers"
            target="_blank"
            rel="noopener noreferrer"
          >
            login
          </a>
          <span className="linespan">|</span>
          <p id="copyright"> Copyright © AMAX Leather Inc.</p>
        </div>
        <div className="right">
          {/* <a
            className="botButton"
            href="http://amaxleather.com/dealers"
            target="_blank"
            rel="noopener noreferrer"
          >
            login
          </a> */}
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
