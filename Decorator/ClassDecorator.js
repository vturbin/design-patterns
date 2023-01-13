"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const defaultGun = (gun) => {
    console.log('-- decorator function invoked --');
    return class extends Gun {
        constructor() {
            super(...arguments);
            this.ammo = 10;
        }
    };
};
let Gun = class Gun {
    constructor() {
        console.log('-- this constructor invoked --');
    }
};
Gun = __decorate([
    defaultGun
], Gun);
console.log('-- creating an instance --');
const gun = new Gun();
console.log(gun); // => 10
