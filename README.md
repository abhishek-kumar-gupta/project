##### 27 Using Underline package and contain function 

var _= require('underscore'); //loading module
//require function works like this first it assumes it is
// core module else assume
//File or Folder else // we access file or folder via ./
//node_module   //our case

var result = _.contains([1,2,3],4); // contain has two arguments ist is array second variable we r looking for that
// array if it is in that array it returns true else false
console.log(result);







 ##### 44 Building Web Server using Express
 
 // In cmd run
// mkdir express-demo
//npm init --yes
// npm i express
//then inside express-demo folder add any file let say index.js and write below written code in that file




const express =require('express'); //load express module using require now it returns a function let stores in express 
const app = express(); // stores result of express in app object

// now app object has methods like get post push delete

app.get('/',(req, res)=> {
  res.send('Hello World');
}) ;   //get takes two arguments ist is path or url , second is callback function also called route handeler that will be called when we get http request to this endpoint.
 //now callback function has two arguments request and respond
// request has many properties that tells info about incoming request. to learn then refer express documentation go to expressjs.com

app.get('/api/cources', (req, res)=>
{               // defining another route
   res.send([1,2,3]);
});

app.listen(4200, ()=> console.log('Listening on port 3000...'));

// run localhost 4200
// run localhost 4200 then path of other route









##### 46 Environment variables 

##// we have made changes in same above code 


const express =require('express'); 

const app = express(); 



app.get('/',(req, res)=> {
  res.send('Hello World.......');
}) ;   
app.get('/api/cources', (req, res)=>
{           
   res.send([1,2,3]);
});


const port = process.env.PORT || 4200; // using Environment variables. in place of below line
//app.listen(4200, ()=> console.log('Listening on port 4200...'));   
app.listen(port, ()=> console.log(`Listening on port ${port}...`));  // specify port in place of 4200and used backtick to display that particular port
 

// in our machine no environment varible is defined so we need to define.
// we can define Port By commant set PORT=port-numebr example set PORT=4525







##### 47 Route Parameters 
//we have accessed  particular element of array using id param

// we have made changes in same above 46thcode 


const express =require('express'); 

const app = express(); 



app.get('/',(req, res)=> {
  res.send('Hello World.......');
}) ;   
app.get('/api/cources', (req, res)=>
{           
   res.send([1,2,3]);
});

app.get('/api/cources/:id', (req , res)=>
{
    res.send(req.params.id);
});    //http://localhost:4200/api/cources/1   // query parameters 





app.get('/api/posts/:year/:month', (req , res)=>
{
    res.send(req.params);
});


###use below app.get after commenting above one i.e req.param below are req query

app.get('/api/posts/:year/:month', (req , res)=>
{
    res.send(req.query);
});
//http://localhost:4200/api/posts/2019/1?sortBy=name



const port = process.env.PORT || 4200;   
app.listen(port, ()=> console.log(`Listening on port ${port}...`));  











