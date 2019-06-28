import React from "react";
import { NavLink } from "react-router-dom";
import uuid from "uuidv4";

class Navbar extends React.Component {
  render() {
    const links = Object.keys(this.props.data).map(key => {
        return <div key={uuid()} className="navitem">
          <NavLink
            to={"/" + key + ("headers" in this.props.data[key] ? "/" + Object.keys(this.props.data[key].headers)[0] : "")}
            activeClassName="selectedlink">
            {key}
          </NavLink>
        </div>
      }
    );
    return (
      <div className={this.props.onHome ? "navbar" : "navbar sub-page"}>
        <NavLink to="">
          <img
            src={require("../images/logo-tm.png")}
            className="logo-image"
            alt="logo"
          />
        </NavLink>
        {links}
      </div>
    );
  }
}

export default Navbar;
