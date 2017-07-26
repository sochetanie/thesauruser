import React, { Component } from 'react'
import MetricContainer from "./MetricContainer"

export default class TextContainer extends Component {
  constructor() {
     super()

     this.state = {
         text: ''
     }
  }

  handleTextChange = (e) => {
      this.setState({
          text: e.target.value
      })
  }

  render() {
    const style = {
        height:'300px',
        width:'600px',
        padding:'10px',
            }
    return (
        <div>
            <textarea type="text" style={style} placeholder="Enter Text" 
            value={this.state.text}
            onChange={this.handleTextChange} />
            <MetricContainer text={this.state.text} />
        </div>
    )
  }

 }

