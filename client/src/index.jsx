
import React from "react"

import ReactDOM from 'react-dom';
import $ from 'jquery';
class CourseContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }


  render(){
    return (
    <div> Keep it Positive! </div>
    )
  }
}

ReactDOM.render(<CourseContent />, document.getElementById('courseContent'));