
use Students

// Create Collection
db.createCollection("students")

// Insert Student Records
db.students.insertMany([
  {roll: 1, name: "Anamika", age: 19, marks: 88, city: "Lucknow"},
  {roll: 2, name: "Uday", age: 18, marks: 76, city: "Jaunpur"},
  {roll: 3, name: "Vaishnavi", age: 19, marks: 92, city: "Kanpur"},
  {roll: 4, name: "Annu", age: 18, marks: 69, city: "Ayodhya"},
  {roll: 5, name: "Vansh", age: 19, marks: 81, city: "Varanasi"}
])

// Display All Students
db.students.find()

// Equal To
db.students.find({marks: {$eq: 88}})

// Greater Than
db.students.find({marks: {$gt: 85}})

// Less Than
db.students.find({marks: {$lt: 60}})

// Greater Than or Equal To
db.students.find({marks: {$gte: 90}})

// Less Than or Equal To
db.students.find({marks: {$lte: 70}})

// Update Student
db.students.updateOne(
  {roll: 5},
  {$set: {marks: 95}}
)

// Delete One
db.students.deleteOne({roll: 10})

// Delete Many
db.students.deleteMany({marks: {$lt: 60}})

// AND Operator
db.students.find({
  $and: [{marks: {$gt: 80}}, {age: 19}]
})

// OR Operator
db.students.find({
  $or: [{city: "Lucknow"}, {city: "Kanpur"}]
})

// Ascending Order
db.students.find().sort({marks: 1})

// Descending Order
db.students.find().sort({marks: -1})

// Limit
db.students.find().limit(5)

// Search By City
db.students.find({city: "Lucknow"})

// Count Documents
db.students.countDocuments()
