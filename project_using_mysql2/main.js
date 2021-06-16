const path = require('path');

// EXPRESS
const express = require('express');
const app = express();

// <---[CONTROLLERS]---> 
const serverController = require('./controllers/index-cotroller.js');
const errorController = require('./controllers/404-control.js');

// EJS for HTML
app.set('view engine', 'ejs');
app.set('views', 'views');

// ALLOW TO USE PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// BODY PARSER
app.use(express.urlencoded({extended: true}));

// <---[CONTROLLERS]---> 
app.use('/', serverController);
app.use(errorController.get404);

// EXPRESS PORT
app.listen(3000, function () {
    console.log("nodejs web app running");
});