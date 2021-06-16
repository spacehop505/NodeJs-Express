//const logger = require('morgan');
const path = require('path');

// EXPRESS
const express = require('express');
const app = express();

// <---[CONTROLLERS]---> 
const serverController = require('./controllers/index-cotroller.js');
const errorController = require('./controllers/404-control.js');

// squelize connection
const sequelize = require('./models/connection-squelize.js');

// EJS for HTML
app.set('view engine', 'ejs');
app.set('views', 'views');


// ALLOW TO USE PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// BODY PARSER
app.use(express.urlencoded({extended: true}));
//app.use(express.json());

// <---[CONTROLLERS]---> 
app.use('/', serverController);
app.use(errorController.get404);

// squelize connection
sequelize.sync().then(result => {
    console.log("nodejs web app running");
    app.listen(3000);
  }).catch(err => {
    console.log(err);
  });
  
  