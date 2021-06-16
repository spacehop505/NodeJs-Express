const path = require('path');

// EXPRESS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// CONTROLLER 
const serverController = require('./controllers/default-cotroller');
const errorController = require('./controllers/error');

// EJS for HTML
app.set('view engine', 'ejs');
app.set('views', 'views');

// ALLOW TO USE PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// BODY PARSER
app.use(bodyParser.urlencoded({
    extended: false
}));

// CONTROLLER 
app.use('/', serverController);
app.use(errorController.get404);


// EXPRESS PORT
app.listen(3000);