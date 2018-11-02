
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
  componentDidMount(){
    this.fetchBlogPosts()
  }

  fetchBlogPosts() {
    $.get('/api/blogs', (data) => {
      this.setState({'data': data});
      console.log(data)
    })

  }
  render(){
    return (
    <div> Keep it Positive! </div>
    )
  }
}

ReactDOM.render(<CourseContent />, document.getElementById('courseContent'));