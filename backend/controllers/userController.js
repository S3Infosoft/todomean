/*
 var bodyParser= require('body-parser');
var mongoose= require('mongoose');
const passport = require('passport');
var User=require('../models/model.js');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');


require('../auth/auth');
const connection2=mongoose.createConnection('mongodb://angtest:angtest1@ds159025.mlab.com:59025/todonew');
connection2.once('open',()=>{
  console.log('database2 connected');
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports=function(app){
//exports.register=function(req,res){
/*app.post('/auth/register',function(req,res){
 console.log(req.body.fullName);
 //newUser.hash_password = bcrypt.hashSync(req.body.hash_password, 10);
  var nwuser=User(req.body).save(function(err, user) {
   if (err) {
     return res.status(400).send({
       message: err
     });
   } else {
    //user.hash_password = undefined;
     return res.json(user);
   }
 });
});
app.post('/auth/sign_in',function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')});
      }
    }
  });
});
/*exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};*//*
app.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
  res.json({
    message : 'Signup successful',
    user : req.user
  });
});
//POST login route (optional, everyone has access)




app.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {     try {
      if(err || !user){
        const error = new Error('An Error occured')
        return next(error);
      }
      req.login(user, { session : false }, async (error) => {
        if( error ) return next(error)
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { _id : user._id, email : user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user : body },'top_secret');
        //Send back the token to the user
        return res.json({ token });
      });     } catch (error) {
      return next(error);
    }
  })(req, res, next);
});*/
