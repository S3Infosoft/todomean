const express = require('express');
 var bodyParser= require('body-parser');
var mongoose= require('mongoose');
var User=require('../models/model.js');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
  var ObjectId = mongoose.Schema.Types.ObjectId;
var DateOnly = require('mongoose-dateonly')(mongoose);
//schema
var Issue=new mongoose.Schema({

  title: String,
  description: String,
  severity:String,
dueDate:String

    //default:'Open'
});
//model
var TodoM = mongoose.model('TodoM',Issue);
/*
var testitem=CalenM({event:'event1',descriptiom:'event1',from:26-12-2018,to:30-12-2018}).save(function(err){
  if(err) throw err;
  console.log('item saved');
});*/
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();

//Lets say the route below is very sensitive and we want only authorized users to have access

//Displays information tailored according to the logged in user
router.get('/issues', (req, res, next) => {
  //We'll just send back the user details and the token

      TodoM.find({},function(err,issues){
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
router.post("/issues/add",urlencodedParser,function(req,res){
  //get data from the view and store it to mango db
  console.log(req.body.dueDate);
    console.log(req.body.title);
  var newEv= TodoM(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);


    });
  });
    router.post("/issues/update/:id",function(req,res,next){
      //get data from the view and store it to mango db


      TodoM.findById(req.params.id,(err,issues)=>{
        if(err)
          return next(new Error('could not load document'));
        else {
          issues.title=req.body.title;

          issues.description=req.body.description;
          issues.severity=req.body.severity;
  issues.dueDate=req.body.dueDate;

          issues.save().then(issues=>{
            res.json('update done');

          }).catch(err=>{
            res.status(400).send('update faied');
          });}
      });

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
