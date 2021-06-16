// EXPRESS
const express = require('express');
const router = express.Router();

// FRUIT - Class, Array
const Fruits = require('../models/fruit');
const Fruit_Array = require('../models/fruit-array');


// GET - RENDER html.ejs
router.get('/', exports.getSettings = (req, res) => {
    console.log('GET: ', req.url);

    const fruits = Fruit_Array.fetchAll();

    res.render('settings.ejs', {
        pageTitle: 'Settings',
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
    res.redirect('/');
});

// UPDATE
router.post('/update/', exports.postUpdate = (req, res) => {
    console.log('UPDATE: ', req.url);

    Fruit_Array.updateFruit(req.body.html_id, req.body.html_name, req.body.html_price);
    res.redirect('/');
});

// DELETE
router.post('/delete/', exports.postDelete = (req, res) => {
    console.log('DELETE: ', req.url);

    Fruit_Array.deleteFruit(req.body.html_id);
    res.redirect('/');
});


// SEARCH BY NAME
router.get('/:name', exports.getFruit = (req, res) => {

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


module.exports = router;