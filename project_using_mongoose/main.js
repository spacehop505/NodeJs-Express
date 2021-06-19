//const logger = require('morgan');
const path = require('path');

// EXPRESS
const express = require('express');
const app = express();

const mongoose = require('mongoose');

// <---[CONTROLLERS]---> 
const serverController = require('./controllers/index-cotroller.js');
const errorController = require('./controllers/404-control.js');

// EJS for HTML
app.set('view engine', 'ejs');
app.set('views', 'views');


// ALLOW TO USE PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// BODY PARSER
app.use(express.urlencoded({
  extended: true
})); //x-www-form-urlencoded <form>


// <---[CONTROLLERS]---> 
app.use('/', serverController);
app.use(errorController.get404);


mongoose.connect("mongodb://localhost:27017/node-fruit", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => {
    app.listen(3000);
  }).catch((err) => console.log(err));