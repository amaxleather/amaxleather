import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Topbar from "./components/Topbar";
import Contact from "./screens/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as utils from "./components/animations";
import Bottombar from "./components/Bottombar";
import Retailers from "./screens/Retailers";
import Lightbox from "./components/LightBox";
import uuid from "uuidv4";
import ContentScreen from "./screens/ContentScreen";
import HeadersScreen from "./screens/HeadersScreen";
import CollectionScreen from "./screens/CollectionScreen";
import "./css/main.css";
import "./css/collection.css";
import "./css/contentscreen.css";
import "./css/mobile.css";

const fixTitle = str => str.toLowerCase().replace(/ /g, "-");

class App extends Component {
  state = {
    contactOpen: false,
    retailersOpen: false,
    isIE: false,
    lightbox: false,
    lightboximg: null
  };
  componentWillMount() {
    this.setState({
      isIE: this.checkBrowser()
    });
    this.data = require("./data/data.json");
    this.previousPath = this.props.location.pathname;
    this.position = 0;
    this.routes = Object.keys(this.data.headers).map(key =>
      <Route
        key={uuid()}
        path={fixTitle("/" + key)}
        render={(props) => {
          const data = this.data.headers[key];
          if (data.type === 0) {
            return (<ContentScreen
              data={data}
            />);
          } else if (data.type === 1) {
            return (<HeadersScreen
              data={data}
            />);
          } else {
            return (<CollectionScreen
              data={data}
              {...props}
              changeLightBox={this.changeLightBox}
              position={this.position}
            />);
          }
        }}
      />);
  }
  openContact = () => {
    if (this.state.contactOpen === false) {
      this.setState({
        contactOpen: true,
        retailersOpen: false
      });
    } else {
      this.setState({
        contactOpen: false
      });
    }
  };
  openRetailers = () => {
    if (this.state.retailersOpen === false) {
      this.setState({
        retailersOpen: true,
        contactOpen: false
      });
    } else {
      this.setState({
        retailersOpen: false
      });
    }
  };
  checkOnHome = () => {
    return this.props.location.pathname === "/";
  };
  checkBrowser = () => {
    return /*@cc_on!@ || */ !!document.documentMode;
  };
  showLightbox = () => {
    if (!this.state.lightbox) {
      this.setState({
        lightbox: true
      });
    } else {
      this.setState({
        lightbox: false
      });
    }
  };
  changeLightBox = imagesrc => {
    this.setState({ lightbox: true, lightboximg: imagesrc });
  };

  render() {
    return (
      <div className="App">
        {this.state.isIE ? (
          <React.Fragment>
            <div>
              <img
                src={require("./images/logo-tm.png")}
                className="logo-image"
                alt="logo"
                width="200px"
              />
            </div>
            <br />
            <br />
            <div>
              We apologize valued customer, but this website does not support
              Internet Explorer.
            </div>
            <br />
            <div>
              We recommend using Google Chrome, Mozilla Firefox, or Microsoft
              Edge instead.
            </div>
            <br />
            <div>
              Once again we are very sorry and thank you for visiting AMAX
              Leather!
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Topbar />
            <div className="main-container">
              {this.state.lightbox && (
                <Lightbox
                  image={this.state.lightboximg}
                  onClick={this.showLightbox}
                />
              )}
              <Navbar data={this.data.headers} onHome={this.checkOnHome()} />
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  timeout={300}
                  classNames="fade"
                  onEnter={node => {
                    utils.introPageAnimation(node, this.previousPath, this.props.location.pathname);
                  }
                  }
                  onExit={node => {
                    utils.outroPageAnimation(node, this.previousPath, this.props.location.pathname);
                    this.previousPath = this.props.location.pathname;
                  }
                  }
                >
                  <Switch location={this.props.location}>
                    {this.routes}
                    <Route
                      path="*"
                      render={() => (
                        <Home />
                      )}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Contact
                open={this.state.contactOpen ? this.state.contactOpen : false}
                contact={this.openContact}
                data={this.data.contact}
              />
              <Retailers
                open={this.state.retailersOpen ? this.state.retailersOpen : false}
                retailers={this.openRetailers}
                data={this.data.retailers}
              />
            </div>
            <Bottombar
              contact={this.openContact}
              retailers={this.openRetailers}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
