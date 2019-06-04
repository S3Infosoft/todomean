//notebookschema
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var Notebook=new mongoose.Schema({

notebook:String,
userId:String
    //default:'Open'
});
//model
var NoteM= mongoose.model('NoteM',Notebook);
module.exports=NoteM;
