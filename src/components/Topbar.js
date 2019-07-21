import React from "react";

class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <a
          className="twitter"
          href="https://twitter.com/AmaxLeather"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="fb"
          href="https://www.facebook.com/amaxleather"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="pinterest"
          href="https://www.pinterest.com/amaxleather/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="insta"
          href="https://www.instagram.com/amaxleather/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
        <a
          className="youtube"
          href="https://www.youtube.com/channel/UCf8J1MC7cYx4xbP_lcaBkTA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div />
        </a>
      </div>
    );
  }
}

export default Topbar;
