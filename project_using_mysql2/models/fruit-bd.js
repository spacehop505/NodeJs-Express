// SQL connection
const db = require('./connection.js');

exports.addFruit = (fruit) => {
    return db.execute('INSERT INTO fruits VALUES(default, ?, ?)',
        [fruit.name, fruit.price]);
};

exports.fetchAll = () => {
    return db.execute('SELECT * FROM fruits;');
};

exports.searchFruit = (id) => {
    return db.execute('SELECT * FROM fruits WHERE id=?', [id]);
};

exports.updateFruit = (fruits) => {
    return db.execute('UPDATE fruits SET name=?, price=? WHERE id=?', [fruits.name, fruits.price,fruits.id]);
};

exports.deleteFruit = (id) => {
    return db.execute('DELETE FROM fruits WHERE id=? ', [id]);
};