export class AnyCar {
    constructor(public driver: Driver){}

    public drive():void {
        console.log(`Car is being driven by ${this.driver.name}`);
        
    }
}

class CarProxy {
    private car: AnyCar;

    constructor(public driver: Driver){
        this.car = new AnyCar(driver)
    }

    public drive(): void {
        if (this.driver.age >= 18) {
            return this.car.drive()
        } 
        console.log('Driver is too young to drive')
    }
}

class Driver {
    constructor(public name: string, public age: number) {}
}

const driver = new Driver('John', 14);
const car = new CarProxy(driver)
car.drive()
