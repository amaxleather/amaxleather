import React from "react";
import * as animations from "./animations";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import CollectionList from "./CollectionList";
import "../css/collection.css";
import "../css/main.css";
import uuid from "uuidv4";

const fixTitle = str => str.toLowerCase().replace(" ", "-");

class CollectionScreen extends React.Component {
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
    const links = Object.keys(this.props.data.headers).map(key =>
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
          <CollectionList
            data={this.props.data.headers[key].data}
            changeLightBox={this.props.changeLightBox}
          />
        )}
      />);
    return (
      <React.Fragment>
        <div className="collection" id="collection" style={{ opacity: 0 }}>
          <div className="nav-cont">
            <div className="sub-nav">
              <div className="headers title">
                <NavLink className="mobileBack" to="">
                  {""}
                </NavLink>
                {this.props.data.title}
              </div>
              <div className="line" />
              <div className="linkList">
                {links}
              </div>
            </div>
          </div>
          <TransitionGroup>
            <CSSTransition
              key={this.props.history.location.key}
              timeout={500}
              classNames="fade"
              onEnter={node => this.onEnter(node)}
              onExit={node => this.onExit(node)}
            >
              <Switch>
                {routes}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </React.Fragment>
    );
  }
}

export default CollectionScreen;
