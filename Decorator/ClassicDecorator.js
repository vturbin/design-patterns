"use strict";
class Car {
    getDescription() {
        return this.description;
    }
}
class CarOptions extends Car {
}
// ------------------------------ Cars ------------------------------
class ModelS extends Car {
    constructor() {
        super(...arguments);
        this.description = 'Model S';
    }
    cost() {
        return 73000;
    }
}
class ModelX extends Car {
    constructor() {
        super(...arguments);
        this.description = 'Model X';
    }
    cost() {
        return 77000;
    }
}
// ------------------------------ Options ------------------------------
class EnhancedAutoPilot extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
    }
    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}
class SmartAirSuspension extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Smart Air Suspension';
    }
    cost() {
        return this.decoratedCar.cost() + 2500;
    }
}
class RearFacingSeats extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Rear Facing Seats';
    }
    cost() {
        return this.decoratedCar.cost() + 4000;
    }
}
// ------------------------------ Configure our Tesla! ------------------------------
let myTesla = new ModelS();
console.log(myTesla.getDescription(), myTesla.cost());
myTesla = new SmartAirSuspension(myTesla);
console.log(myTesla.getDescription(), myTesla.cost());
myTesla = new RearFacingSeats(myTesla);
console.log(myTesla.getDescription(), myTesla.cost());
