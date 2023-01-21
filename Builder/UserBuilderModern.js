"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address2 = void 0;
class Address2 {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
        this.zip = zip;
        this.street = street;
    }
}
exports.Address2 = Address2;
class User2 {
    constructor(name, { age, phone = '123-456-7890', address } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}
const user2 = new User2('Bob', { address: new Address2('12345', 'Main St.') });
