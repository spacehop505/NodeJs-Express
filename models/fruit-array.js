let fruits = [];

// ADD
exports.addFruit = (fruit) => {
    fruits.push(fruit);
}

// READ ALL
exports.fetchAll = () => {
    return fruits;
}

// READ SEARCH
exports.searchFruit = (name_input) => {
    for (let item of fruits) {
        if (name_input == item.id) {
            console.log('found');
            return item;
        };
    };
}

// UPDATE
exports.updateFruit = (id, name, price) => {
    for (let item of fruits) {
        if (id == item.id) {
            item.name = name;
            item.price = price;
        };
    };
}

// DELETE
exports.deleteFruit = (id) => {
    for (let i = 0; i < fruits.length; i++) {
        console.log('del: ', fruits[i]);
        if (fruits[i].id == id) {
            fruits.splice(i, 1);
        };
    };

}