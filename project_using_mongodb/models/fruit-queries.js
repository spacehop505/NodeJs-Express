const mongodb = require('mongodb');
const getDb = require('./connection-mongodb.js').getDb;

// ADD
exports.addFruit = (fruit) => {
    const db = getDb();
    return db.collection('fruits').insertOne({
        name: fruit.name,
        price: fruit.price
    });
};

// READ ALL
exports.fetchAll = () => {
    const db = getDb();
    return db.collection('fruits').find().toArray();
};

// READ SEARCH
exports.searchFruit = (id) => {
    const db = getDb();
    return db.collection('fruits').findOne({
        _id: new mongodb.ObjectID(id)
    });
};

// UPDATE
exports.updateFruit = (fruit) => {
    const db = getDb();
    return db.collection('fruits').replaceOne({
        _id: new mongodb.ObjectID(fruit.id)
    }, {
        $set: {
            name: fruit.name,
            price: fruit.price
        }
    });
};

// DELETE
exports.deleteFruit = (id) => {
    const db = getDb();

    return db.collection('fruits').deleteOne({
        _id: new mongodb.ObjectID(id)
    });
};