
/*
var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser');
var mongoose =require ("mongoose");
var Issue=require('./models/issue');
const app =express();



const router =express.Router();
app.use(cors());
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.connect('mongodb://angtest:angtest1@ds127624.mlab.com:27624/todoang');
app.use(bodyParser.urlencoded({'extended':'true'}));
const connection =mongoose.connection;
connection.once('open',()=>{
  console.log('databse connected');
});

router.route('/issues').get((req,res)=>{
  Issue.find({},(err,issues)=>{
    if(err){
      console.log(err);
      console.log('here!');}
      else
        res.send("issues are");
        res.json(issues);

  });
});
router.route('/issues/:id').get((req,res)=>{
  Issue.findById(req.params.id,(err,issue)=>{
    if(err)
      console.log(err);
    else
      res.json(issue);

  });
});
router.route('/issues/add').post(urlencodedParser,(req,res)=>{
  var issue =new Issue(req.body);
  issue.save()
    .then(issue=>{
      res.status(200).json({'issue':"Added successfully"});
    })
    .catch(err=>{
      res.status(400).send('failed to create');
    });
});

router.route('/issues/update/:id').post((req,res)=>{
Issue.findById(req.params.id,(err,issue)=>{
  if(!issue)
    return next(new Error('could not load document'));
  else {
    issue.title=req.body.title;
    issue.responsible=req.body.responsible;
    issue.description=req.body.description;
    issue.severity=req.body.severity;
    issue.status=req.body.status;

    issue.save().then(issue=>{
      res.json('update done');

    }).catch(err=>{
      res.status(400).send('update faied');
    });
  }
});
});

router.route('/issues/delete/:id').get((req,res)=>{
  Issue.findByIdRemove({_id:req.params.id},(err,issue)=>{
    if(err)
      res.json(err);
    else {
      res.json("removed successfully");
    }
  });
});

app.use('/',router);
app.listen(4000,()=>console.log("express ser"));*/
var express= require('express');
var bodyParser= require('body-parser');
var cors=require('cors');
var port= 4000;
var app = express();
var calController=require('./controllers/todoControl.js');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set ('view engine','ejs');
app.use(cors());
app.use(bodyParser.json());

// leaving the static part right now
//app.use(express.static(./public));
calController(app);//firing controller

app.listen(port);//listening
console.log("you are  listening to port 4000");
