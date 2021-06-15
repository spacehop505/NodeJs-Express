const path = require('path');

// EXPRESS
const express = require('express');
const app = express();

// EJS for HTML
app.set('view engine', 'ejs');
app.set('views', 'views');

// ALLOW TO USE PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

// CONTROLLER 

const serverController = require('./controllers/default-cotroller');

app.use('/', serverController);

const errorController = require('./controllers/error');
app.use(errorController.get404);



// EXPRESS PORT
app.listen(3000);