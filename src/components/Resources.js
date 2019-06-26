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
            <NavLink
              to="/resources/leather-care"
              activeClassName="selectedlink"
              className="tertiaryButton"
            >
              leather care
            </NavLink>
            <NavLink
              to="/resources/furniture-care"
              activeClassName="selectedlink"
              className="tertiaryButton"
            >
              furniture care
            </NavLink>
            <NavLink
              to="/resources/cleaning"
              activeClassName="selectedlink"
              className="tertiaryButton"
            >
              cleaning
            </NavLink>
            <NavLink
              to="/resources/assembly"
              activeClassName="selectedlink"
              className="tertiaryButton"
            >
              assembly
            </NavLink>
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
                <Route
                  path="/resources/leather-care"
                  render={() => (
                    <Resource
                      data={this.props.data.find(obj => {
                        return obj.categories[0] === 7;
                      })}
                    />
                  )}
                />
                <Route
                  path="/resources/furniture-care"
                  render={() => (
                    <Resource
                      data={this.props.data.find(obj => {
                        return obj.categories[0] === 6;
                      })}
                    />
                  )}
                />
                <Route
                  path="/resources/cleaning"
                  render={() => (
                    <Resource
                      data={this.props.data.find(obj => {
                        return obj.categories[0] === 4;
                      })}
                    />
                  )}
                />
                <Route
                  path="/resources/assembly"
                  render={() => (
                    <Resource
                      data={this.props.data.find(obj => {
                        return obj.categories[0] === 3;
                      })}
                    />
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>
    );
  }
}

export default withRouter(Resources);
