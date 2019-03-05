var bodyParser= require('body-parser');
var mongoose= require('mongoose');

  var ObjectId = mongoose.Schema.Types.ObjectId;
//var DateOnly = require('mongoose-dateonly')(mongoose);
//connection
mongoose.connect('mongodb://angtest:angtest1@ds159025.mlab.com:59025/todonew');
const connection =mongoose.connection;
connection.once('open',()=>{
  console.log('databse connected');
});
//schema
var Issue=new mongoose.Schema({

  title: String,
  description: String,
  severity:String,

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
module.exports= function(app){


app.get('/issues',function(req,res){

//es.setHeader('Content-type','text/plain');

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
app.get('/issues/:id',function(req,res){
  //this will give events stored in  our mangoDB and pass it to the view
    TodoM.findById(req.params.id,function(err,issue){
    if(err)
    {console.log(err);}
    else
    //res.send("issues are:");
      res.json(issue);
  });

});
app.post("/issues/add",urlencodedParser,function(req,res){
  //get data from the view and store it to mango db
  var newEv= TodoM(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);


    });
  /*var issue = TodoM(req.body);
  issue.save()
    .then(issue=>{
      res.status(200).json({'issue':"Added successfully"});
    })
    .catch(err=>{
      res.status(400).send('failed to create');
    });*/
  });
  app.post("/issues/update/:id",function(req,res,next){
    //get data from the view and store it to mango db
var idO=ObjectId.fromString(req.params.id);

    TodoM.findById(idO,(err,issues)=>{
      if(err)
        return next(new Error('could not load document'));
      else {
        issues.title=req.body.title;

        issues.description=req.body.description;
        issues.severity=req.body.severity;


        issues.save().then(issues=>{
          res.json('update done');

        }).catch(err=>{
          res.status(400).send('update faied');
        });}
    });

    });
  app.get('/issues/delete/:id',function(req,res){
    //this will give events stored in  our mangoDB and pass it to the view
      TodoM.findByIdAndDelete(req.params.id,function(err,issues){
      if(err) console.log(err);
      else
      res.json(issues);

    });


  });

};
