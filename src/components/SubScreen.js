import React from 'react'
import '../css/content.css'
import renderHTML from 'react-render-html'

class SubScreen extends React.Component {
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

export default SubScreen;
