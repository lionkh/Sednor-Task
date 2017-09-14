var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var app = express();
var compiler = webpack(config);
var db;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());



app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


//users

app.get('/users', (req, res) => {
  db.collection('users').find().toArray((err,docs)=>{
    if(err){
        console.log(err);
        return res.sendStatus(500);
      }

      res.send(docs);
  })
});

app.post('/users', (req, res) => {
  
  var user = {
    login: req.body.login,
    password: req.body.password,
    name: req.body.name
  };

  db.collection('users').findOne({login: req.body.login}, function(err, doc){
    if(err){
    return res.sendStatus(500);
    }
    if(doc == null){
      db.collection('users').insert(user, function(err, result){ 
      if(err){
        console.log('error' + err);
        return res.sendStatus(500);
      }
      res.send(user); 
       }); 
   // return res.sendStatus(200);
    }
    if(doc != null){
     console.log(doc);
     return res.sendStatus(500);
    }
  })

  /* 

   if(status = 500)
    {
     // console.log('Уже есть юзер');
      return res.sendStatus(500);
    }

    if(status = 200){
     
    }  */




});



app.get('/users/:login', (req, res)=> {
   db.collection('users').findOne({login: req.params.login}, function(err, doc){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })

})








//posts

 app.get('/posts', (req, res) => {

    db.collection('posts').find().toArray(function(err, docs){
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }

      res.send(docs);
    })
});

app.get('/posts/:id', (req, res) => {
  db.collection('posts').findOne({_id: ObjectID(req.params.id)}, function(err, doc){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })
});

app.post('/posts', (req, res) => {
  //получаем json: {"author": "lev", "title": "First, ...}
 
  var post = {
    author: req.body.author,
    title: req.body.title,
    text: req.body.text,
    //image: req.body.image
  };

  db.collection('posts').insert(post, function(err, result){ //попробовать через then data=>{}
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(post); //id вставится автоматически */
 });
});

 app.delete('/users', (req, res)=>{

  db.collection('users').drop();
  
}) 

app.delete('/posts', (req, res)=>{
  
    db.collection('posts').drop();
    
  }) 

app.delete('/users/:id', (req, res) => {
  db.collection('users').deleteOne( 
    {_id: ObjectID(req.params.id)}, // условие для поиска элемента
    (err, result)=>{
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    }
  )
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
}); 

/* app.get('/feed', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
}); 

app.get('/greet', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});  */


MongoClient.connect('mongodb://localhost:27017/myDB', function(err, database){
  if(err){
    return console.log(err);
  }

  db = database;

  app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});

});


