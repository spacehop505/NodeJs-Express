// EXPRESS
const express = require('express');
const router = express.Router();

const Fruit = require('../models/fruit.js');
const Fruit_Database = require('../models/fruit-queries.js');

// GET
router.get('/', exports.getIndex = (req, res) => {
    console.log('\nGET: ', req.url);

    Fruit_Database.fetchAll().then((reply) => {
        console.log(reply);
        res.render('index.ejs', {
            pageTitle: 'Root',
            fruits_key: reply
        });
    }).catch(err => console.log(err));
});



// SEARCH BY ID
router.get('/found/:id', exports.getFruit = (req, res) => {
    console.log('\nGET: ', req.url);

    const id = req.params.id;

    Fruit_Database.searchFruit(id)
        .then((fruit) => {
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
                    id: fruit[0]._id,
                    name: fruit[0].name,
                    price: fruit[0].price,
                    pageTitle: 'search'
                });
            }
        }).catch(err => console.log(err));
});

// CREATE
router.post('/create', exports.postCreate = (req, res) => {
    console.log('\nCREATE: ', req.url);

    const name = req.body.html_name;
    const price = req.body.html_price;
    const fruit = new Fruit(null, name, price);

    Fruit_Database.addFruit(fruit)
        .then((reply) => {
            console.log(reply);
            res.redirect('/');
        }).catch(err => console.log(err));
});

// UPDATE
router.post('/update', exports.postUpdate = (req, res) => {
    console.log('\nUPDATE: ', req.url);

    const id = req.body.html_id;
    const name = req.body.html_name;
    const price = req.body.html_price;
    const fruit = new Fruit(id, name, price);

    Fruit_Database.updateFruit(fruit).then((reply) => {
        console.log(reply);
        res.redirect('/');
    }).catch(err => console.log(err));
});

// DELETE
router.post('/delete', exports.postDelete = (req, res) => {
    console.log('\nDELETE: ', req.url);

    const id = req.body.html_id;

    Fruit_Database.deleteFruit(id).then((reply) => {
        console.log(reply);
        res.redirect('/');
    }).catch(err => console.log(err));
});


module.exports = router;