"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnyCar = void 0;
class AnyCar {
    constructor(driver) {
        this.driver = driver;
    }
    drive() {
        console.log(`Car is being driven by ${this.driver.name}`);
    }
}
exports.AnyCar = AnyCar;
class CarProxy {
    constructor(driver) {
        this.driver = driver;
        this.car = new AnyCar(driver);
    }
    drive() {
        if (this.driver.age >= 18) {
            return this.car.drive();
        }
        console.log('Driver is too young to drive');
    }
}
class Driver {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const driver = new Driver('John', 14);
const car = new CarProxy(driver);
car.drive();
