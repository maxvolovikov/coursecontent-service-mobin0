var faker = require('faker');
var fs = require('file-system');
var mongoose = require('mongoose');

var createDB = function(n) {
  console.log("www" + arguments)
  createSaveTestData(n)
}


function createSaveTestData(n) {
  var courses = {}
  for(var i = 0; i < n ; i++){
    var courseName = faker.company.catchPhrase()
    courses[courseName] = []
    var courselen = Math.floor(Math.random()*8) + 1
    for(var j = 0 ; j < courselen; j++) {
      var courseItem = "Talk by " + faker.name.findName()
      courses[courseName].push(courseItem)
    }


  }
  console.log(courses)
  saveFile(courses);
  // console.log(saved)
  // let result =
  //  { courseData: {
  //   courseId : Int,
  // courseName: String,
  // courseItems: [String],
  // courseDescription: String,
  // courseRequirements: String,
  // courseInstructor: String
  //  }



}



// //Define a schema
// var Schema = mongoose.Schema;
// var SomeModelSchema = new Schema({
//     a_string: String,
//     a_date: Date
// });

// var SomeModel = mongoose.model('SomeModel', SomeModelSchema );


//     var breakfastSchema = new Schema({
//       eggs: {
//         type: Number,
//         min: [6, 'Too few eggs'],
//         max: 12,
//         required: [true, 'Why no eggs?']
//       },
//       drink: {
//         type: String,
//         enum: ['Coffee', 'Tea', 'Water',]
//       }
//     });




//     var awesome_instance = new SomeModel({ name: 'awesome' });

// // Save the new model instance, passing a callback
// awesome_instance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

// find all athletes that play tennis
// var query = Athlete.find({ 'sport': 'Tennis' });

// // selecting the 'name' and 'age' fields
// query.select('name age');

// // limit our results to 5 items
// query.limit(5);

// // sort by age
// query.sort({ age: -1 });

// // execute the query at a later time
// query.exec(function (err, athletes) {
//   if (err) return handleError(err);
//   // athletes contains an ordered list of 5 athletes who play Tennis
// })

  function saveFile(output) {

  const content = JSON.stringify(output);

    fs.writeFile("server/test.json", content, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }

      console.log("The file was saved!");
// });

  })

  }

createDB(1)
  exports.default = createDB