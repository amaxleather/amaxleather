import React from "react";
import { TweenMax } from "gsap";

class Lightbox extends React.Component {
  componentDidMount() {
    // console.log('mounting')
    TweenMax.fromTo("#lightbox", 0.1, { opacity: 0 }, { opacity: 1 });
    TweenMax.fromTo(
      "#lightbox img",
      0.3,
      { opacity: 0 },
      { opacity: 1, delay: 0.15 }
    );
  }
  render() {
    return (
      <div id="lightbox" onClick={this.props.onClick}>
        <div className="cover">
          <div className="img">
            <img
              className="lightimg"
              // style={{opacity:0}}
              src={this.props.image}
              alt="Lightbox"
            />
            {/* <p>*click anywhere to close</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Lightbox;
