const express = require('express');
const Signdata = require('./src/model/Signdata');
const Bookdata = require('./src/model/Bookdata');
const Authordata = require('./src/model/Authordata');
//npm install corsconst User = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
email='admin@gmail.com';
password='1234';



app.post('/insert',function(req,res){
  console.log(req.body.fname);
    var item= 
    {
      fname: req.body.item.fname,
       email: req.body.item.email,
      password:  req.body.item.password,
      confirm_password:  req.body.item.confirm_password
    }

  var item =  Signdata(item);
  item.save();//saving to database
  //res.redirect('/');

    });

    app.post('/login', (req, res) => {
      let userData = req.body
      
        
          if (!email) {
            res.status(401).send('Invalid Username')
          } else 
          if ( password !== userData.password) {
            res.status(401).send('Invalid Password')
          } else {
            let payload = {subject: email+password}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
          }
        
      })

      function verifyToken(req, res, next) {
        if(!req.headers.authorization) {
          return res.status(401).send('Unauthorized request')
        }
        let token = req.headers.authorization.split(' ')[1]
        if(token === 'null') {
          return res.status(401).send('Unauthorized request')    
        }
        let payload = jwt.verify(token, 'secretKey')
        if(!payload) {
          return res.status(401).send('Unauthorized request')    
        }
        req.userId = payload.subject
        next()
      }
    
      //book operations//

      app.post('/add',verifyToken,function(req,res){
   
        console.log(req.body);
       
        var book = {       
            title : req.body.book.title,
            author : req.body.book.author,
            image:req.body.book.image,
            genre:req.body.book.genre
       }       
       var book = new Bookdata(book);
       book.save();
    });

    //books show
    app.get('/books',function(req,res){
        
        Bookdata.find()
                    .then(function(books){
                        res.send(books);
                    });
    });

    //single book

    app.get('/books/:id',  (req, res) => {
      console.log(id);
      const id = req.params.id;
        Bookdata.findOne({"_id":id})
        .then((book)=>{
            res.send(book);
        });
    })
//single book//

// app.get('/books/read/:id',function(req,res){
        
//   Bookdata.find()
//               .then(function(book){
//                   res.send(book);
//               });
// });

//book update

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      title=req.body.title,
      author=req.body.author,
      genre=req.body.genre,
      image=req.body.image
      
     Bookdata.findByIdAndUpdate({"_id":id},
                                  {$set:{"title":title,
                                         "author":author,
                                         "genre":genre,
                                         "image":image
                                    }})
     .then(function(){
         res.send();
     })
   })


   //book delete//
   app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    Bookdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })


  //Author operations//
  app.post('/addauthor',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var author = {       
        poet : req.body.author.poet,
        description : req.body.author.description,
        works:req.body.author.works,
        image:req.body.author.image
        
   }       
   var author = new Authordata(author);
   author.save();
});
app.get('/authors',function(req,res){
    console.log('hi i am reached authors');
    Authordata.find()
                .then(function(authors){
                    res.send(authors);
                });
});
app.get('/authors/:id',  (req, res) => {
  console.log('id author got',);
  
  const _id = req.params.id;
  console.log(_id);
    Authordata.findOne({"_id":_id})
    .then((author)=>{
        res.send(author);
    });
})


app.put('/authors/updateauthor',(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  poet=req.body.poet,
  description=req.body.description,
  works=req.body.works,
  image=req.body.image
  
 Authordata.findByIdAndUpdate({"_id":id},
                              {$set:{"poet":poet,
                                     "description":description,
                                     "works": works,
                                     "image":image
                                }})
 .then(function(){
     res.send();
 })
})
//Author delete//
app.delete('/removeauthor/:id',(req,res)=>{

id = req.params.id;
Authordata.findByIdAndDelete({"_id":id})
.then(()=>{
    console.log('success')
    res.send();
})
})

    app.listen(5500, function(){
      console.log('listening to port 5500');
  });