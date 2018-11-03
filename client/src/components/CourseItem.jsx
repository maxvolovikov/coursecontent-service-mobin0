

import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Entries from './Entries.jsx'



class CourseItem extends React.Component {
  constructor ({courseItem}) {
    super()
    this.state = {
      courseItem: courseItem,
      entries: courseItem.entries,
      title: courseItem.title,
      sectionNumber: courseItem.sectionNumber,
      sectionId: "section" + courseItem.sectionNumber,
      hidden: true
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({'hidden': !this.state.hidden})
  }


  render () {
    return (

      <div id = "courseItem">
      <button className = "courseItem" onClick = {this.clickHandler}>  {this.state.title}   </button>


      {this.state.hidden ? null:
      (<div  id = {"section" + this.state.sectionNumber}>
      {this.state.entries.map((entry) => <Entries key = {JSON.stringify(entry)} entry = {entry} sectionNumber = {this.state.sectionNumber}/>)}</div>)
    }


      </div>
      )



  }



}

export default CourseItem