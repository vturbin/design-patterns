"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address1 = void 0;
class Address1 {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
        this.zip = zip;
        this.street = street;
    }
}
exports.Address1 = Address1;
class User1 {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}
const user1 = new User1('Bob', null, null, new Address1('12345', 'Main St.'));
