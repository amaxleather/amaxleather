import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import SubScreen from "../components/SubScreen";
import uuid from "uuidv4";

const fixTitle = str => str.toLowerCase().replace(/ /g, "-");

class HeadersScreen extends React.Component {
  componentWillMount() {
    this.headers = Object.keys(this.props.data.headers).map(key =>
      <NavLink
        key={uuid()}
        to={"/" + fixTitle(this.props.data.title + "/" + this.props.data.headers[key].title)}
        activeClassName="selectedlink"
        className="tertiaryButton"
      >
        {this.props.data.headers[key].title}
      </NavLink>);
    this.routes = Object.keys(this.props.data.headers).map(key =>
      <Route
        key={uuid()}
        path={"/" + fixTitle(this.props.data.title + "/" + this.props.data.headers[key].title)}
        render={() => (
          <SubScreen
            data={this.props.data.headers[key].content}
          />
        )}
      />);
  }

  render() {
    return (
      <React.Fragment>
        <div className="resources" id="resources">
          <div className="sub-nav">
            <div className="headersContainer2">
              <div className="headers">
                <NavLink className="mobileBack" to="">
                  {""}
                </NavLink>
                {this.props.data.title}
              </div>
              <div className="line" />
              <div className="linkList">
                {this.headers}
              </div>
            </div>
          </div>
          <Switch>
            {this.routes}
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default HeadersScreen;
