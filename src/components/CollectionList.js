import React from "react";
import axios from "axios";
import * as utils from "../utils/animations";

const apibase = "https://clients.alexander-kim.com/amax/wp-json/wp/v2";
class CollectionList extends React.Component {
  state = {
    data: [],
    loading: true
  };

  collectionRef = React.createRef();

  componentWillMount() {
    axios
      .get(
        `${apibase}/collection?furnituretype=${this.props.dataId}&per_page=100`
      )
      .then(data => {
        setTimeout(() => {
          this.setState({
            data: data.data,
            loading: false
          });
        }, 200);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loading !== prevState.loading && !this.state.loading) {
      utils.collectionSubIntro(this.collectionRef.current.children);
    }
  }

  render() {
    return (
      <div ref={this.collectionRef} className="collectionList">
        {!this.state.loading ? (
          this.state.data.map(item => (
            <div className="node" key={item.id} style={{ opacity: 0 }}>
              <p />
              <div
                className="collectionNode"
                onClick={() => {
                  this.props.changeLightBox(item.acf.image.sizes.large);
                }}
              >
                <div className="collectionName">
                  <p>{item.title.rendered}</p>
                  <p className="dimensions">{item.acf.dimensions}</p>
                </div>
                <div className="image">
                  <div className="imageContainer">
                    <img
                      src={item.acf.image.sizes.large}
                      alt={item.title.rendered}
                      className={
                        item.acf.type_of_item === "Recliner" ? "recliner" : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="preloader" />
        )}
      </div>
    );
  }
}

export default CollectionList;
