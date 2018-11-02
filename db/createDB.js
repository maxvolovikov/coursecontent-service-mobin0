var faker = require('faker');
var fs = require('file-system');
var mongoose = require('mongoose');
var db = require('./index.js');
var courseContent = require('./courseContent.js');



var createDB = function(n) {
  console.log("www" + arguments)
  createSaveTestData(n)
}

var savetoDB = function(userData){
  console.log("trying")
  courseContent.create(userData)
    .then(() => db.disconnect());

}


var createSaveTestData = function(n) {
  let courses = []

  for(var i = 0; i < n ; i++){
    let courseItem = {}
    let courseName = faker.company.catchPhrase()
    let courselen = Math.floor(Math.random()*8) + 1
    courseItem.title = courseName;
    courseItem.sectionNumber = i + 1;
    courseItem.entries = [];
    for(var j = 0 ; j < courselen; j++) {
      let entry = {}
      entry.name = "Talk by " + faker.name.findName();
      entry.entryNumber = j + 1
      courseItem.entries.push(entry)

    }
      courses.push(courseItem)

  }
  console.log("here", JSON.stringify(courses))
  savetoDB(courses);
}

createDB(1)