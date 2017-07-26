/**
 * Created by JP on 7/26/17.
 */
 import React, { Component } from 'react'
 import MetricContainer from "./MetricContainer"

 class TextContainer extends Component{
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

        return(
            <div>

                <input
                type="text"
                value={this.state.text}
                onChange={this.handleTextChange}
                placeholder="Enter Text"
                /> <br/>

                <MetricContainer text={this.state.text} />

            </div>
        )
    }
 }

export default TextContainer
