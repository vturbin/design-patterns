"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
class Box {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
    getPrice() {
        return this.items.map(item => item.getPrice()).reduce((price1, price2) => price1 + price2);
    }
}
const box1 = new Box();
box1.addItem(new Product('Hammer', 10));
box1.addItem(new Product('Nails', 5));
const box2 = new Box();
box2.addItem(new Product('Phone', 655));
box2.addItem(new Product('Headphones', 55));
box2.addItem(new Product('Wireless Charger', 24));
const box3 = new Box();
box3.addItem(new Product('Display', 290));
box3.addItem(new Product('Mouse', 65));
box3.addItem(new Product('Keyboard', 50));
const bigBox = new Box();
bigBox.addItem(box1);
bigBox.addItem(box2);
bigBox.addItem(box3);
console.log('Total order price: ', bigBox.getPrice());
