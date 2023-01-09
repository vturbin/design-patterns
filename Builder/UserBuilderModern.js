"use strict";
class Address2 {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
        this.zip = zip;
        this.street = street;
    }
}
class User2 {
    constructor(name, { age, phone = '123-456-7890', address } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}
const user2 = new User2('Bob', { address: new Address2('12345', 'Main St.') });
