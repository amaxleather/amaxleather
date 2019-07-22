import React from 'react'
import data from '../data/data.js';

class SubScreen extends React.Component {
  render() {
    return (
      <div className="content">
        {data(this.props.data)}
      </div>
    )
  }
}

export default SubScreen;
