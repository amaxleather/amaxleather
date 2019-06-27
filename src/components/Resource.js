import React from 'react'
import '../css/resources.css'
import renderHTML from 'react-render-html'

class Resource extends React.Component {
  render() {
    return (
      <div className="resource-item">
        <div className="content">
          {renderHTML(this.props.data)}
        </div>
      </div>
    )
  }
}

export default Resource
