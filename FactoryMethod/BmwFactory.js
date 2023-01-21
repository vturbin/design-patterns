"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bmw = void 0;
class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
exports.Bmw = Bmw;
class BmwFactory {
    create(type) {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}
const bmwFactory = new BmwFactory();
const x5 = bmwFactory.create('X5');
const x6 = bmwFactory.create('X6');
console.log('BMW X5:', x5);
console.log('BMW X6:', x6);
