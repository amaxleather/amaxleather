import React from "react";
import uuid from "uuidv4";

class Slider extends React.Component {
  state = {
    sliderPos: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.sliderCycle, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderImages = () => {
    return this.props.data.map((image) => (
      <img
        key={uuid()}
        className="alignnone size-full"
        alt={image}
        src={require("../" + image)}
        width={1600}
        height={802}
      />
    ));
  };

  renderSlider = () => {
    return this.props.data.map((image, index) => (
      <div
        className={
          this.state.sliderPos === index
            ? "active sliderPos"
            : "sliderPos"
        }
        style={{marginLeft: `${90 / (this.props.data.length + 1)}%`}}
        key={uuid()}
        onClick={() => {
          this.setState({ sliderPos: index });
          clearInterval(this.interval);
          this.interval = setInterval(this.sliderCycle, 3000);
        }}
      />
    ));
  };

  sliderPosition = () => {
    let style = {
      marginLeft: `-${100 * this.state.sliderPos}%`
    };
    return style;
  };

  sliderCycle = () => {
    this.setState({ sliderPos: (this.state.sliderPos + 1) % this.props.data.length });
  };

  render() {
    return (
      <div className="sliderContainer">
        <div className="slider" id="slider">
          <div className="sliderContent" style={this.sliderPosition()}>
            <p>
              {this.renderImages()}
            </p>
          </div>
        </div>
        <div className="controls">
          <div
            className="left arrow"
            onClick={() => {
              this.setState({ sliderPos: (this.state.sliderPos - 1 + this.props.data.length) % this.props.data.length });
              clearInterval(this.interval);
              this.interval = setInterval(this.sliderCycle, 3000);
            }}
          />
          {this.renderSlider()}
          <div
            className="right arrow"
            onClick={() => {
              this.setState({ sliderPos: (this.state.sliderPos + 1) % this.props.data.length });
              clearInterval(this.interval);
              this.interval = setInterval(this.sliderCycle, 3000);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
