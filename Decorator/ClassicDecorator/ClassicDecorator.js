"use strict";
class Tesla {
    constructor() {
        this.description = 'Model S';
    }
    getDescription() {
        return this.description;
    }
    cost() {
        return 73000;
    }
}
class TeslaOptionsDecorator extends Tesla {
}
// ------------------------------ Options ------------------------------
class EnhancedAutoPilot extends TeslaOptionsDecorator {
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
class SmartAirSuspension extends TeslaOptionsDecorator {
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
class RearFacingSeats extends TeslaOptionsDecorator {
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
let myTesla = new Tesla();
console.log(myTesla.getDescription(), myTesla.cost());
myTesla = new SmartAirSuspension(myTesla);
console.log(myTesla.getDescription(), myTesla.cost());
myTesla = new RearFacingSeats(myTesla);
console.log(myTesla.getDescription(), myTesla.cost());
