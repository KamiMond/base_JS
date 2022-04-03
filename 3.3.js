'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.salePrice = product.price * 0.85;
    console.log("Цена товара " + product.id + " со скидкой равняется " + product.salePrice);
});