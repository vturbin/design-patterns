class Tesla {
  public description = 'Model S';

  public getDescription(): string {
    return this.description;
  }

  public cost(): number {
    return 73000;
  }
}

abstract class TeslaOptionsDecorator extends Tesla {
  decoratedCar: Tesla;
  public abstract getDescription(): string;
}


// ------------------------------ Options ------------------------------
class EnhancedAutoPilot extends TeslaOptionsDecorator {
  constructor(car: Tesla) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class SmartAirSuspension extends TeslaOptionsDecorator {
  constructor(car: Tesla) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ', Smart Air Suspension';
  }

  public cost(): number {
    return this.decoratedCar.cost() + 2500;
  }
}

class RearFacingSeats extends TeslaOptionsDecorator {
  constructor(car: Tesla) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ', Rear Facing Seats';
  }

  public cost(): number {
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
