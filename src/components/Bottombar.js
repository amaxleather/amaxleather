import React from "react";
import "../css/main.css";

class Bottombar extends React.Component {
  render() {
    return (
      <div className="bottombar">
        <div className="leftbot">
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
