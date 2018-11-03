

import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CourseItem from './CourseItem.jsx'



class CourseContent extends React.Component {
  constructor ({courseData}) {
    super()
    this.state = {
      data: courseData
    }
    console.log(this.state.data)
  }


  render () {
    return (
      <div id = "coursecontent">
      {this.state.data.map((courseItem) => <CourseItem key = {JSON.stringify(courseItem)} courseItem = {courseItem} />)}
      </div>
)


  }



}

export default CourseContent