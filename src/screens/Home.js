import React from "react";
import image from '../images/home-image.jpg';

class Home extends React.Component {
  componentDidMount() {
    const parent = document.querySelector("#home").parentElement;
    parent.style.width = "100%";
  }
  render() {
    return (
      <div className="home" id="home">
        <img
          alt="home-img"
          src={image}
        />
      </div>
    );
  }
}

export default Home;
