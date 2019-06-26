import React from 'react'
import '../css/resources.css'
import renderHTML from 'react-render-html'

class Resource extends React.Component {
  render() {
    return (
      <div className="resource-item">
        <div className="content">
          {this.props.data && renderHTML(this.props.data.content.rendered)}
        </div>
      </div>
    )
  }
}

export default Resource
