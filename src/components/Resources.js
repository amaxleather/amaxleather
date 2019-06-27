import React from "react";
import * as utils from "../utils/animations";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Switch, Route, withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Resource from "./Resource";
import "../css/resources.css";

class Resources extends React.Component {
  onEnter = node => {
    if (node) {
      utils.resourcesSubIntro(node);
    }
  };

  onExit = node => {
    if (node) {
      utils.resourcesSubOutro(node);
    }
  };
  render() {
    const headers = this.props.data.map(obj =>
      <NavLink
        to={"/resources/" + obj.title.replace(" ", "-")}
        activeClassName="selectedlink"
        className="tertiaryButton"
      >
        {obj.title}
      </NavLink>);
    const routes = this.props.data.map(obj =>
      <Route
        path={"/resources/" + obj.title.replace(" ", "-")}
        render={() => (
          <Resource
            data={obj.content}
          />
        )}
      />);
    return (
      <div className="resources" id="resources" style={{ opacity: 0 }}>
        <div className="sub-nav">
          <div className="headers">
            <NavLink className="mobileBack" to="">
              {""}
            </NavLink>{" "}
            Resources
          </div>
          <div className="line" />
          <div className="linkList">
            {headers}
          </div>
        </div>
        {this.props.data && (
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
        )}
      </div>
    );
  }
}

export default withRouter(Resources);
