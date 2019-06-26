import React from "react";
import axios from "axios";
import renderHTML from "react-render-html";

const apibase = "https://clients.alexander-kim.com/amax/wp-json/wp/v2";
class Slider extends React.Component {
  state = {
    data: [],
    loading: true,
    sliderPos: 0
  };

  componentWillMount() {
    axios.get(`${apibase}/sliders`).then(data => {
      this.setState({
        data: data.data,
        loading: false
      });
    });
  }
  componentDidMount() {
    this.sliderCycle();
  }

  renderSlider = () => {
    let imageArray = [];
    for (
      let i = 0;
      i < this.state.data[0].content.rendered.split(",img").length - 1;
      i++
    ) {
      imageArray.push(this.state.data[0].content.rendered.split(",img")[i]);
    }
    return imageArray.map(image => (
      <div
        className={
          this.state.sliderPos === imageArray.indexOf(image)
            ? "active sliderPos"
            : "sliderPos"
        }
        id={imageArray.indexOf(image)}
        key={`image${imageArray.indexOf(image)}`}
        onClick={() => {
          this.setState({ sliderPos: imageArray.indexOf(image) });
        }}
      />
    ));
    // return sliderImages
    //   .map(() => <div className="sliderPos" id={placement + 1} />)
    //   .slice(
    //     0,
    //     sliderImages.map(() => <div className="sliderPos" />).length - 1
    //   );
  };

  sliderPosition = () => {
    let style = {
      marginLeft: `-${100 * this.state.sliderPos}%`
    };
    return style;
  };
  sliderCycle = () => {
    setTimeout(() => {
      this.state.sliderPos === 2
        ? this.setState({ sliderPos: 0 })
        : this.setState({ sliderPos: this.state.sliderPos + 1 });
      this.sliderCycle();
    }, 3000);
  };

  render() {
    return (
      <div className="slider" id="slider">
        <div className="sliderContent" style={this.sliderPosition()}>
          {this.state.loading ? (
            <div />
          ) : (
            renderHTML(
              this.state.data[0].content.rendered.split(",img").join("")
            )
          )}
        </div>
        <div className="controls">
          <div
            className="left arrow"
            onClick={() => {
              this.state.sliderPos === 0
                ? this.setState({ sliderPos: 2 })
                : this.setState({ sliderPos: this.state.sliderPos - 1 });
            }}
          />
          {this.state.loading ? <div /> : this.renderSlider()}
          <div
            className="right arrow"
            onClick={() => {
              this.state.sliderPos === 2
                ? this.setState({ sliderPos: 0 })
                : this.setState({ sliderPos: this.state.sliderPos + 1 });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
