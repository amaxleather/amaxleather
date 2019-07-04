import React from "react";
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

  handleClick(e, to) {
    if (this.props.location.pathname === to) {
      e.preventDefault();
    }
  }

  render() {
    const headers = Object.keys(this.props.data.headers).map(key => {
      const to = "/" + fixTitle(this.props.data.title + "/" + this.props.data.headers[key].title);
      return <NavLink
        key={uuid()}
        to={to}
        activeClassName="selectedlink"
        className="tertiaryButton"
        onClick={(e) => this.handleClick(e, to)}
      >
        {this.props.data.headers[key].title}
      </NavLink>
    });
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
          <div className="headersContainer2">
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
        </div>
        <TransitionGroup className="resource" id="resource">
          <CSSTransition
            key={this.props.history.location.key}
            timeout={300}
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
