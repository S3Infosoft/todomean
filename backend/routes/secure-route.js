const express = require('express');
 var bodyParser= require('body-parser');
var mongoose= require('mongoose');
var User=require('../models/model.js');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
  var ObjectId = mongoose.Schema.Types.ObjectId;
var DateOnly = require('mongoose-dateonly')(mongoose);
var TodoM=require('../models/todo.js');
var NoteM=require('../models/notebook.js');
/*
var testitem=CalenM({event:'event1',descriptiom:'event1',from:26-12-2018,to:30-12-2018}).save(function(err){
  if(err) throw err;
  console.log('item saved');
});*/
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();

//Lets say the route below is very sensitive and we want only authorized users to have access

//Displays information tailored according to the logged in user
router.get('/issues/:uid', (req, res, next) => {
  //We'll just send back the user details and the token

      TodoM.find({userId:req.params.uid},function(err,issues){
      if(err)

      {  console.log('error 1');

        console.log(err);}
      else
      {
      //res.setHeader('Content-type','text/json');

      res.json(issues);
      //res.send("they are"+JSON.stringify(issues));
      }
    });
});
router.get('/notebook/:uid',(req,res,next)=>{
  NoteM.find({userId:req.params.uid},{},function(err,notebooks){
    if(err)
    {console.log(err);}
    else {
res.json(notebooks);
    }
  });

});
router.get('/issues/:id',function(req,res){
  //this will give events stored in  our mangoDB and pass it to the view
    TodoM.findById(req.params.id,function(err,issue){
    if(err)
    {console.log(err);}
    else
    //res.send("issues are:");
      res.json(issue);
  });

});
router.get('/issues/notebook/:uid/:notebook',function(req,res){
  TodoM.find({userId:req.params.uid,notebook:req.params.notebook},function(err,issue){
    if(err)
    {console.log(err);}
    else
    res.json(issue);
  })
});


  router.get('/issues/delete/:id',function(req,res){
      //this will give events stored in  our mangoDB and pass it to the view
        TodoM.findByIdAndDelete(req.params.id,function(err,issues){
        if(err) console.log(err);
        else
        res.json(issues);

      });


    });

module.exports = router;
