// EXPRESS
const express = require('express');
const router = express.Router();

// FRUIT - Class, Array
const Fruits = require('../models/fruit.js');
const Fruit_Database = require('../models/fruit-bd.js');

// GET
router.get('/', exports.getIndex = (req, res) => {
    console.log('\nGET: ', req.url);

    Fruit_Database.fetchAll()
        .then(([fruits]) => {
            console.log(fruits);
            res.render('index.ejs', {
                pageTitle: 'Root',
                fruits_key: fruits
            });
        }).catch(err => console.log(err));

});

// SEARCH BY ID
router.get('/found/:id', exports.getFruit = (req, res) => {
    console.log('\nGET: ', req.url);

    const id = req.params.id;

    Fruit_Database.searchFruit(id)
        .then(([fruit]) => {
            console.log(fruit);
            if (fruit.length == 0) {
                res.render('404.ejs', {
                    url: req.url,
                    pageTitle: 'search'
                });
            } else {
                res.render('found.ejs', {
                    url: req.url,
                    param: req.params.id,
                    id: fruit[0].id,
                    name: fruit[0].name,
                    price: fruit[0].price,
                    pageTitle: 'search'
                });
            }
        }).catch(err => console.log(err));
});

// CREATE
router.post('/create', exports.postCreate = (req, res) => {
    console.log('CREATE: ', req.url);

    const name = req.body.html_name;
    const price = req.body.html_price;
    const fruits = new Fruits(null, name, price);

    Fruit_Database.addFruit(fruits)
        .then(() => {
            res.redirect('/');
        }).catch(err => {
            res.redirect('/');
            console.log(err)
        });
});

// UPDATE
router.post('/update', exports.postUpdate = (req, res) => {
    console.log('UPDATE: ', req.url);

    const id = req.body.html_id;
    const name = req.body.html_name;
    const price = req.body.html_price;
    const fruits = new Fruits(id, name, price);

    Fruit_Database.updateFruit(fruits)
        .then(() => {
            res.redirect('/');
        }).catch(err => {
            res.redirect('/');
            console.log(err)
        });
});

// DELETE
router.post('/delete', exports.postDelete = (req, res, next) => {
    console.log('DELETE: ', req.url);

    Fruit_Database.deleteFruit(req.body.html_id)
        .then(() => {
            res.redirect('/');
        }).catch(err => {
          //  res.redirect('/');
            console.log(err);
        });
});




module.exports = router;