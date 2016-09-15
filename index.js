
var express = require('express');
var bodyParser = require('body-parser');
var courses = require('./routes/courses.js');
var students = require('./routes/students.js');
var app = express();

// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 3000));

// bodyParser needs to be configured for parsing JSON from HTTP body
app.use(bodyParser.json());

// Mount our routes behind /api/ prefix
app.use('/api', courses);
app.use('/api', students);

// Simple hello world route
app.get('/', function(req, res) {
    res.send(" Hello,please use /api/courses or /api/courses");
});

// add student data

    var studentdata = [
        {   id:"001",
            name: "QIan",
            address: "Example Address",
            class: "2000",

         }
    ];
// add course data
    var coursedata = [
       {   id:"1001",
           name: "Finnish",
           description: "Language",
         
       }
    ];
 app.get('/students', function (req, res) {
    res.json(studentdata);
 });
//course
 app.get('/courses', function (req, res) {
     res.json(coursedata);
 });

 app.get('/students/:id', function (req, res) {
     res.json(studentdata[req.params.id]);
 });
//course by id
 app.get('/courses/:id', function (req, res) {
     res.json(coursedata[req.params.id]);
 });

 app.post('/students', function (req, res) {
     
     console.log(req.body);
     studentdata.push({

         name: req.body.name,
         address: req.body.address,
         class:req.body.class,
 });
     res.sendStatus(200);

     // post course
app.post('/courses', function (req, res) {
     
       console.log(req.body);
       coursedata.push({
           
           id: req.body.id,
           name: req.body.name,
           description:req.body.description,
 });
     res.sendStatus(200);

 app.delete('/students/:id',function (req, res) {
        //content
 });
// course delete
 app.delete('/courses/:id',function (req, res) {
     //content
 });

// start listening for incoming HTTP connections
 app.listen(app.get('port'), function() {
     console.log('Node app is running on port', app.get('port'));
 });

