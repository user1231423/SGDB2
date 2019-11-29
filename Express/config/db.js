var mongoose = require('mongoose');

var db = 'mongodb+srv://jevg:escola123@cluster0-fhkwz.mongodb.net/test?retryWrites=true&w=majority';

var connection = mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB Atlas!!!"))
  .catch(err => console.log(err));

module.exports = connection;