var data = require('../src/data');
var express = require('express');
var router = express.Router();

//
// implement functionality
//

function getAllCourses(req,res,next)
{
    res.json(data.getAllCourses());
}

function postNewCourse(req,res,next)
{
    // Post parameters are available through req.body
    // Notice that you really should do some validation before accepting the body
    data.addCourse(req.body);
    res.sendStatus(201);
}

//
// Declare routes
//

router.route('/courses')
    .get(getAllCourses)
    .post(postNewCourse);


router.route('/s/:id')
    .get(function(req,res,next){
        // the id parameter is available at req.params        
        res.json(data.getCourseById(req.params.id));                
    })    
    .delete(function(req,res,next){
        res.send("delete course");
    });

module.exports = router;