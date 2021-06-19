// EXPRESS
const express = require('express');
const router = express.Router();

const Fruit = require('../models/fruit.js');

// GET
router.get('/', getIndex = (req, res) => {
    console.log('\nGET: ', req.url);

    Fruit.find().then((reply) => {
        res.status(200).json({
            message: 'GET',
            content: reply
        });
    }).catch(err => console.log(err));
});

// SEARCH BY ID
router.get('/:id', getFruit = (req, res) => {
    console.log('\nGET: ', req.url);

    const id = req.params.id;

    Fruit.findById(id).then((fruit) => {
        console.log(fruit);

        res.status(200).json({
            message: 'GET',
            content: fruit
        });

    }).catch(err => console.log(err));
});

// CREATE
router.post('/create', postCreate = (req, res) => {
    console.log('\nCREATE: ', req.url);

    const name = req.body.name;
    const price = req.body.price;
    const fruit = new Fruit({
        name: name,
        price: price
    });

    fruit.save().then((reply) => {
        res.status(201).json({
            message: 'POST',
            reply: reply
        });
    }).catch(err => console.log(err));
});

// UPDATE
router.put('/update', postUpdate = (req, res) => {
    console.log('\nUPDATE: ', req.url);

    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;

    Fruit.findOneAndUpdate(id).then(fruit_reply => {
            fruit_reply.name = name;
            fruit_reply.price = price;
            fruit_reply.save();
        }).then(reply => {
            res.status(201).json({
                message: 'PUT',
                reply: reply
            });
        })
        .catch(err => console.log(err));

});

// DELETE
router.delete('/delete', postDelete = (req, res) => {
    console.log('\nDELETE: ', req.url);

    const id = req.body.id;
    Fruit.findOneAndDelete(id).then((reply) => {
        res.status(201).json({
            message: 'DELETE',
            reply: reply
        });
    }).catch(err => console.log(err));
});


module.exports = router;