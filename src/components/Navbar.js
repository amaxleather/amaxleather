import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import uuid from "uuidv4";

const fixTitle = str => str.toLowerCase().replace(/ /g, "-");

class Navbar extends React.Component {
  handleClick(e, to) {
    if (this.props.location.pathname === to) {
      e.preventDefault();
    }
  }

  render() {
    const links = Object.keys(this.props.data).map(key => {
        const to = fixTitle("/" + key + ("headers" in this.props.data[key] ? "/" + Object.keys(this.props.data[key].headers)[0] : ""));
        return <div key={uuid()} className="navitem">
          <NavLink
            to={to}
            activeClassName="selectedlink"
            onClick={(e) => this.handleClick(e, to)}
          >
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

export default withRouter(Navbar);
