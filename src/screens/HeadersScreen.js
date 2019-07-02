import React from "react";
import "../css/about.css";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import SubScreen from "../components/SubScreen";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as animations from "../components/animations";
import uuid from "uuidv4";

const fixTitle = str => str.toLowerCase().replace(" ", "-");

class HeadersScreen extends React.Component {
  onEnter = node => {
    if (node) {
      animations.subIntro(node);
    }
  };

  onExit = node => {
    if (node) {
      animations.subOutro(node);
    }
  };

  render() {
    const headers = Object.keys(this.props.data.headers).map(key =>
      <NavLink
        key={uuid()}
        to={"/" + fixTitle(this.props.data.title + "/" + this.props.data.headers[key].title)}
        activeClassName="selectedlink"
        className="tertiaryButton"
      >
        {this.props.data.headers[key].title}
      </NavLink>);
    const routes = Object.keys(this.props.data.headers).map(key =>
      <Route
        key={uuid()}
        path={"/" + fixTitle(this.props.data.title + "/" + this.props.data.headers[key].title)}
        render={() => (
          <SubScreen
            data={this.props.data.headers[key].content}
          />
        )}
      />);
    return (
      <div className="resources" id="resources">
        <div className="sub-nav">
          <div className="headers">
            <NavLink className="mobileBack" to="">
              {""}
            </NavLink>{" "}
            {this.props.data.title}
          </div>
          <div className="line" />
          <div className="linkList">
            {headers}
          </div>
        </div>
        <TransitionGroup className="resource" id="resource">
          <CSSTransition
            key={this.props.history.location.key}
            timeout={5000}
            classNames="fade"
            onEnter={node => this.onEnter(node)}
            onExit={node => this.onExit(node)}
          >
            <Switch location={this.props.history.location}>
              {routes}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(HeadersScreen);
