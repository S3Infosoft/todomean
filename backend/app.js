/*var express=require('express');
var path =require('path');
var cookieParse=require('cookie-parser');
var bodyParser=require('body-parser');
var exphbs=require('express-handlebars');
var expressValidator =require('express-validator');
var flash=require('connect-flash');
var session=require('express-session');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var mongo=require('mongodb');
var mongoose=require('mongoose');
mongoose.connect('');
var db=mongoose.connection;*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const UserModel = require('./models/model');
var cors=require('cors');
mongoose.connect('mongodb://angtest:angtest1@ds159025.mlab.com:59025/todonew');
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;



app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

require('./auth/auth');

app.use(cors({origin:['http://localhost:4200'],credentials:true}));
app.use( bodyParser.urlencoded({ extended : false }) );

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-route');
/*app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});*/
app.use('/', routes);
//We plugin our jwt strategy as a middleware so only verified users can access this route
app.use('/user', passport.authenticate('jwt', { session : false }), secureRoute );

//Handle errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err });
});

app.listen(4000, () => {
  console.log('Server started')
});
