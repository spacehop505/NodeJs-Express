// EXPRESS
const express = require('express');
const router = express.Router();

// FRUIT - Class, Array
const Fruits = require('../models/fruit.js');
const Fruit_Array = require('../models/fruit-array.js');

// GET - RENDER html.ejs
router.get('/', exports.getSettings = (req, res) => {
    console.log('GET: ', req.url);

    printFruit();
    const fruits = Fruit_Array.fetchAll();
    res.render('index.ejs', {
        pageTitle: 'index',
        fruits_key: fruits
    });
});

// CREATE
router.post('/create', exports.postCreate = (req, res) => {
    console.log('CREATE: ', req.url);

    const id = req.body.html_id;
    const name = req.body.html_name;
    const price = req.body.html_price;

    const fruits = new Fruits(id, name, price);
    Fruit_Array.addFruit(fruits);

    printFruit();
    res.redirect('/');
});

// UPDATE
router.post('/update/', exports.postUpdate = (req, res) => {
    console.log('UPDATE: ', req.url);

    Fruit_Array.updateFruit(req.body.html_id, req.body.html_name, req.body.html_price);
    
    printFruit();

    res.redirect('/');
});

// DELETE
router.post('/delete/', exports.postDelete = (req, res) => {
    console.log('DELETE: ', req.url);

    Fruit_Array.deleteFruit(req.body.html_id);
   
    printFruit();
   
    res.redirect('/');
});

// SEARCH BY NAME
router.get('/found/:name', exports.getFruit = (req, res) => {

    const fruit = Fruit_Array.searchFruit(req.params.name);
    console.log(fruit);

    if (fruit == undefined) {
        res.status(404).render('404', {
            pageTitle: 'Page Not Found',
            path: '/404'
        });
    } else {
        res.render('found.ejs', {
            url: req.url,
            id1: fruit.id,
            name: fruit.name,
            price: fruit.price,
            pageTitle: 'search'
        });
    }
});

printFruit = () => {
    const fruits = Fruit_Array.fetchAll();
    console.log(fruits, '\n');
};

module.exports = router;