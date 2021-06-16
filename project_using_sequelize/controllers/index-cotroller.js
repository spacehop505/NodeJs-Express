// EXPRESS
const express = require('express');
const router = express.Router();

// SEQUILIZE
const Fruit_Database = require('../models/fruit-databse.js');

// GET
router.get('/', exports.getIndex = (req, res) => {
    console.log('\nGET: ', req.url);

    // sequilize findAll() method
    Fruit_Database.findAll()
        .then((fruit) => {
            res.render('index.ejs', {
                pageTitle: 'Root',
                fruits_key: fruit
            });
        }).catch(err => console.log(err));
});

// SEARCH BY ID
router.get('/found/:id', exports.getFruit = (req, res) => {
    console.log('\nGET: ', req.url);

    const id = req.params.id;

    // sequilize findByPk() method
    Fruit_Database.findByPk(id)
        .then((fruit) => {
            console.log(fruit);
            if (fruit == null) {
                res.render('404.ejs', {
                    pageTitle: 'not found'
                });
            } else {
                res.render('found.ejs', {
                    url: req.url,
                    param: req.params.id,
                    id: fruit.id,
                    name: fruit.name,
                    price: fruit.price,
                    createdAt: fruit.createdAt,
                    updatedAt: fruit.updatedAt,
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

    // sequilize create() method
    Fruit_Database.create({
        name: name,
        price: price
    }).then(() => {
        res.redirect('/');
    }).catch(err => console.log(err));
});

// UPDATE
router.post('/update', exports.postUpdate = (req, res) => {
    console.log('\nUPDATE: ', req.url);

    const id = req.body.html_id;
    const name = req.body.html_name;
    const price = req.body.html_price;

    // sequilize update() method
    Fruit_Database.update({
        name: name,
        price: price
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/');
    }).catch(err => console.log(err));
});

// DELETE
router.post('/delete', exports.postDelete = (req, res) => {
    console.log('\nDELETE: ', req.url);

    const id = req.body.html_id;

    // sequilize destroy() method
    Fruit_Database.destroy({
        where: {
            id
        }
    }).then(() => {
        res.redirect('/');
    }).catch(err => console.log(err));
});


module.exports = router;