/**
 * Created by JP on 7/26/17.
 */
import React, { Component } from 'react'
import Metrics from './Metrics'

class MetricContainer extends Component {
    constructor(props) {
        super(props)
    }

    // addWerds = (props) => {
    //
    //     const counts = {}
    //     const keys = []
    //
    //     let allwords = props.join("\n");
    //     let tokens = allwords.split(/\W+/);
    //     for (let i = 0; i < tokens.length; i++) {
    //         let word = tokens[i].toLowerCase();
    //         if (counts[word] === undefined) {
    //             counts[word] = 1;
    //             keys.push(word)
    //         } else {
    //             counts[word] = counts[word] + 1
    //         }
    //     }
    // }

    filterText = () => {
        const wordObj = {}

        let wordArray = this.props.text.split(/\W+/)
        let loWordArr = wordArray.map(word => word.toLowerCase())

        for (let i = 0; i < loWordArr.length; i++) {
        if(wordObj[loWordArr] === undefined){
             wordObj[loWordArr] = 1
        } else {
             wordObj[loWordArr] = wordObj[loWordArr] + 1
        }

        }console.log(wordObj)
    }

render() {
    console.log(this.filterText())
    return (

        <div>
            <Metrics text={this.filterText}/>
            {/*<Graph />*/}
        </div>
        )}

}

export default MetricContainer