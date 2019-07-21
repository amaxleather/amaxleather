import React from "react";
import uuid from "uuidv4";

class CollectionList extends React.Component {
  render() {
    return (
      <div className="collectionList">
        {
          this.props.data.map(item => (
            <div className="node" key={uuid()}>
              <p />
              <div
                className="collectionNode"
                onClick={() => {
                  this.props.changeLightBox(require("../" + item.image));
                }}
              >
                <div className="collectionName">
                  <p>{item.title}</p>
                  <p className="dimensions">{item.dimensions}</p>
                </div>
                <div className="image">
                  <div className="imageContainer">
                    <img
                      src={require("../" + item.image)}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default CollectionList;
