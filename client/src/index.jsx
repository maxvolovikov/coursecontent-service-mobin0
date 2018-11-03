
import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CourseContent from './components/CourseContent.jsx'
import courseData from './courseData'

class App extends React.Component {
  constructor(props) {
    super(props);
    // let courseData = [{"title":"Assimilated asynchronous customer loyalty","sectionNumber":1,"entries":[{"name":"Talk by Nikki Batz","entryNumber":1},{"name":"Talk by Frieda Rolfson","entryNumber":2},{"name":"Talk by Ford Konopelski","entryNumber":3},{"name":"Talk by Jaclyn Bode","entryNumber":4},{"name":"Talk by Weldon Lockman","entryNumber":5},{"name":"Talk by Coleman Koepp","entryNumber":6}]},{"title":"Monitored actuating installation","sectionNumber":2,"entries":[{"name":"Talk by Kaylie Kuhic","entryNumber":1},{"name":"Talk by Abelardo Jacobson III","entryNumber":2},{"name":"Talk by Milford Rempel","entryNumber":3},{"name":"Talk by Mr. Violet Kshlerin","entryNumber":4},{"name":"Talk by Dr. Hailie Jaskolski","entryNumber":5},{"name":"Talk by Andre Hagenes","entryNumber":6},{"name":"Talk by Nicklaus Cremin","entryNumber":7}]}]


    this.state = {
      courseData: courseData
    }



  }



  // componentDidMount(){
  //   this.fetchBlogPosts()
  // }

  // fetchBlogPosts() {
  //   $.get('/api/blogs', (data) => {
  //     this.setState({'data': data});
  //     console.log(data)
  //   })

  // }
  render(){
    return (
      <div>
      <div id = "header-title"> Course Content </div>
    <div> <CourseContent courseData = {this.state.courseData}/> </div>

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('courseContent'));