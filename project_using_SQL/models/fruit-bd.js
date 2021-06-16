const db = require('./connection.js');
// ADD
exports.addFruit = (fruit) => {

    return db.execute('INSERT INTO fruits VALUES(default, ?, ?)',
        [fruit.name, fruit.price]);
}

// READ ALL
exports.fetchAll = () => {
    return db.execute('SELECT * FROM fruits;');
}

// READ SEARCH
exports.searchFruit = (id) => {
    return db.execute('SELECT * FROM fruits WHERE id=?', [id]);
}

// UPDATE
exports.updateFruit = (fruits) => {
    return db.execute('UPDATE fruits SET name=?, price=? WHERE id=?', [fruits.name, fruits.price,fruits.id]);
}

// DELETE
exports.deleteFruit = (id) => {
    return db.execute('DELETE FROM fruits WHERE id=? ', [id]);
}