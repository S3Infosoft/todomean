var mongoose=require('mongoose');
const Schema =mongoose.Schema;
var Issue=new Schema({
  title:{
    type:String
  },
  responsiblity:{
    type:String
  },
  severity:{
    type:String
  },
  status:{
    type:String,
    default:'Open'
  }
  });
  module.exports = mongoose.model('Issue',Issue);
//var urlencodedParser = bodyParser.urlencoded({ extended: false });
