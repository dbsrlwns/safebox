const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = mongoose.Schema({
  date: {
    type:String,
    maxlength:50
  },
  location:[{
    type:String
  }]
  
})

const Location = mongoose.model('Location', locationSchema);

module.exports = { Location }
