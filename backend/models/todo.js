//schema
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
var Issue=new mongoose.Schema({

  title: String,
  description: String,
  severity:String,
dueDate:String,
userId:String,
notebook:String
    //default:'Open'
});
//model
var TodoM = mongoose.model('TodoM',Issue);
module.exports=TodoM;
