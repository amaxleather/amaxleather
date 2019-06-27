import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.onHome ? "navbar" : "navbar sub-page"}>
        <NavLink to="">
          <img
            src={require("../images/logo-tm.png")}
            className="logo-image"
            alt="logo"
          />
        </NavLink>
        <div className="navitem">
          <NavLink to="/about" activeClassName="selectedlink">
            about
          </NavLink>
        </div>
        <div className="navitem">
          <NavLink to="/collection/sofas" activeClassName="selectedlink">
            collection
          </NavLink>
        </div>
        <div className="navitem">
          <NavLink to="/craftsmanship" activeClassName="selectedlink">
            craftsmanship
          </NavLink>
        </div>
        <div className="navitem">
          <NavLink to="/resources/leather-care" activeClassName="selectedlink">
            resources
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
