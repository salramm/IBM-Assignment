//js to control the behaviour of the webapp
var bodyParser = require('body-parser');
var data = [];


module.exports = function(app){
   app.get('/todo', function(req, res){
     res.render('todo', {todos: data});

   });
   app.post('/todo', function(req, res){


   });
   app.delete('/todo', function(req, res){

   });
};
