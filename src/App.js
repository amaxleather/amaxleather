import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Collection from "./components/Collection";
import Resources from "./components/Resources";
import Craftmanship from "./components/Craftmanship";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import Contact from "./components/Contact";
import "./css/main.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as utils from "./utils/animations";
import Bottombar from "./components/Bottombar";
import axios from "axios";
import Retailers from "./components/retailers/Retailers";
import Lightbox from "./components/LightBox";

const apibase = "https://clients.alexander-kim.com/amax/wp-json/wp/v2";
class App extends Component {
  state = {
    posts: {
      data: []
    },
    contactOpen: false,
    retailersOpen: false,
    isIE: false,
    lightBoxClicked: false,
    lightbox: false,
    lightboximg: null
  };
  componentWillMount = () => {
    //string literal => having a variable with a part of a string
    axios.get(`${apibase}/posts`).then(data => {
      this.setState({
        posts: {
          data: data.data
        }
      });
    });
    this.setState({
      isIE: this.checkBroser()
    });
  };
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
    if (this.props.location.pathname === "/") {
      return true;
    }
    return false;
  };
  checkBroser = () => {
    var isIntEx = /*@cc_on!@*/ false || !!document.documentMode;
    return isIntEx;
  };
  toggleLightBox = () => {
    this.setState({ lightBoxClicked: !this.state.lightBoxClicked });
  };
  showLightbox = () => {
    this.toggleLightBox();
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
    this.toggleLightBox();
    this.setState({ lightbox: true, lightboximg: imagesrc });
  };

  render() {
    return (
      <div className="App">
        {this.state.isIE ? (
          <React.Fragment>
            <div>
              <img
                src={require("../src/images/logo-tm.png")}
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
              We recommend using Google Chrome, Mozilla Firefire, or Microsoft
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
              <Navbar onHome={this.checkOnHome()} />
              <TransitionGroup appear={true}>
                <CSSTransition
                  key={this.props.location.key}
                  timeout={500}
                  classNames="fade"
                  onEnter={node =>
                    utils.introPageAnimation(node, this.props.location.pathname)
                  }
                  onExit={node =>
                    utils.outroPageAnimation(node, this.props.location.pathname)
                  }
                >
                  <Switch location={this.props.location}>
                    <Route
                      exact
                      path="/"
                      // component={Home}
                      render={() => (
                        <Home
                          data={this.state.posts.data.find(obj => {
                            return obj.categories[0] === 13;
                          })}
                        />
                      )}
                    />
                    <Route
                      path="/collection"
                      render={props => (
                        <Collection
                          toggleLightBox={this.toggleLightBox}
                          {...props}
                          showLightbox={this.showLightbox}
                          changeLightBox={this.changeLightBox}
                          lightbox={this.state.lightbox}
                          lightboximg={this.state.lightboximg}
                        />
                      )}
                    />
                    <Route
                      path="/about"
                      render={() => (
                        <About
                          data={this.state.posts.data.find(obj => {
                            return obj.categories[0] === 2;
                          })}
                        />
                      )}
                    />
                    <Route
                      path="/craftmanship"
                      render={() => (
                        <Craftmanship
                          data={this.state.posts.data.find(obj => {
                            return obj.categories[0] === 5;
                          })}
                        />
                      )}
                    />
                    <Route
                      path="/resources"
                      render={() => (
                        <Resources
                          data={this.state.posts.data.filter(obj => {
                            if (
                              obj.categories[0] === 5 ||
                              obj.categories[0] === 2
                            ) {
                              return false;
                            }
                            return true;
                          })}
                        />
                      )}
                    />
                    <Route
                      path="*"
                      render={() => (
                        <Home
                          data={this.state.posts.data.find(obj => {
                            return obj.categories[0] === 13;
                          })}
                        />
                      )}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Contact
                open={this.state.contactOpen ? this.state.contactOpen : false}
                contact={this.openContact}
                data={this.state.posts.data.find(obj => {
                  return obj.categories[0] === 14;
                })}
              />
              <Retailers
                open={
                  this.state.retailersOpen ? this.state.retailersOpen : false
                }
                retailers={this.openRetailers}
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
