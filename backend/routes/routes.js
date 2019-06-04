const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const router = express.Router();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var qs=require('querystring');
var mongoose= require('mongoose');
var User=require('../models/model.js');
var bcrypt=require('bcrypt');
var TodoM=require('../models/todo.js');
var  NoteM=require('../models/notebook.js');
  var ObjectId = mongoose.Schema.Types.ObjectId;
var DateOnly = require('mongoose-dateonly')(mongoose);

//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
  console.log("you're here");
  res.json({
    message : 'Signup successful',
    user : req.user
  });
});
router.post('/login',urlencodedParser, async(req, res, next) => {

console.log(req.body.email);
  passport.authenticate('login', { successRedirect: '/user/issues',failureRedirect: '/login' },async (err, user, info) => {     try {
      if(err || !user){
        const error = new Error('An Error occured')
      console.log(user.email+"erroridde");
        return next(error);
      }
      req.login(user, { session : false }, async (error) => {
        if( error ) return next(error)
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { _id : user._id, email : user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user : body },'top_secret');
        const email=user.email;
        const id=user._id;
        //Send back the token to the user
        console.log("done");
        return res.json({token,email,id});

      });     } catch (error) {
      return next(error);
    }
  })(req, res, next);
});
router.post("/issues/add",urlencodedParser,async(req,res)=>{
  //get data from the view and store it to mango db
console.log(req.body.title);
console.log(req.body.userId);
console.log(req.body);

  var newEv= TodoM(req.body).save(function(err,data){
      if(err){ console.log(err);throw err;}
      res.json(data);


    });
  });
  router.post("/notebook/add",urlencodedParser,async(req,res)=>{
    //get data from the view and store it to mango db

  console.log(req.body.userId);
  console.log(req.body);

    var newEv= NoteM(req.body).save(function(err,data){
        if(err){ console.log(err);throw err;}
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

module.exports = router;
