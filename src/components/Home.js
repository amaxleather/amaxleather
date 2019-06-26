import React from "react";

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
          src={
            this.props.data && this.props.data.acf.home_page_image.sizes.large
          }
        />
      </div>
    );
  }
}

export default Home;
