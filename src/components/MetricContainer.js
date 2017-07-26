import React, { Component } from 'react'
import Metrics from './Metrics'

export default class MetricContainer extends Component {
  constructor(props) {
      super(props)
  }

  sortTextbyNumber = () => {
    let sWords = this.props.text.toLowerCase().trim().replace(/[,;"().]/g,'').split(/[\s\/]+/g).sort()

    let ignore = ['and','the','to','a','of','for','as','i','with', 'at', 'it','is','on','that','this','can', 'an' ,'in','be','has','if']

    let counts = {}
    for(let i=0; i<sWords.length; i++){
      if(!ignore.includes(sWords[i])){
        counts[sWords[i]] = counts[sWords[i]] || 0
        counts[sWords[i]]++
      }
    }
    // console.log(counts)

    let arr =[]
    for (var key in counts) {
      // arr.push([`${key}: ${counts[key]}`])
      if(counts.hasOwnProperty(key)) {
        arr.push( [key, counts[key]] )
      }
    }

    arr.sort(function(a,b) {
      return b[1] - a[1]
    })
    return arr
    console.log(arr)
    
 }

  render() {
      return (
          <div>
              <Metrics text={this.sortTextbyNumber()}/>
              {/*<Graph />*/}
          </div>
          )
  }

}
