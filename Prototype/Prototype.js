"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor(field) {
        this.field = field; // any value of any type
    }
    clone() {
        //return Object.assign({}, this) // shallow copy
        return JSON.parse(JSON.stringify(this)); //deep copy
    }
}
// The Client
// Create an object containing an array
const object1 = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1: ${JSON.stringify(object1)}`);
const object2 = object1.clone(); // Clone
console.log(`OBJECT2: ${JSON.stringify(object2)}`);
// Change the value of one of the array elements in OBJECT2
// Depending on your clone method, either a shallow or deep copy
// was performed
object2.field[1] = 101;
// Comparing OBJECT1 and OBJECT2
console.log(`OBJECT2: ${JSON.stringify(object2)}`);
console.log(`OBJECT1: ${JSON.stringify(object1)}`);
