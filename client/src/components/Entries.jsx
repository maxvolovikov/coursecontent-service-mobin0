

import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';



class Entries extends React.Component {
  constructor ({entry}) {
    super()
    this.state = {
      entry :entry

    }
    // console.log(this.state.entry.name)


  }


  render () {

    return (<div className = "entry"> {this.state.entry.name} </div>)


  }



}

export default Entries