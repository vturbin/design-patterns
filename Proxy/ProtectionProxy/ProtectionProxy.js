"use strict";
class AnyCar {
    constructor(driver) {
        this.driver = driver;
    }
    drive() {
        console.log(`Car is being driven by ${this.driver.name}`);
    }
}
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
