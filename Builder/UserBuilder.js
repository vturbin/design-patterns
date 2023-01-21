"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
        this.zip = zip;
        this.street = street;
    }
}
exports.Address = Address;
class User {
    constructor(name) {
        this.name = name;
    }
}
/** Let's say if you forget to call User.setId() then you get an object with a null value for a property.
 *  while if you do UserBuilder.build() you can get an exception or maybe just automatically set the ID
 *  to the next available - logic that shouldn't be in the User object */
class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }
    setAge(age) {
        this.user.age = age;
        return this;
    }
    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }
    setAddress(address) {
        this.user.address = address;
        return this;
    }
    build() {
        return this.user;
    }
}
const builder = new UserBuilder('Bob');
const user = builder.setAddress(new Address('12345', 'Main St.')).setAge(23).build();
