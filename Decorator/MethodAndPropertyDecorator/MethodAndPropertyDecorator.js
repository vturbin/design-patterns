"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDecorator = void 0;
const myDecorator = (parent, prop, descriptor) => {
    console.log(parent, typeof parent);
    console.log(prop, typeof prop);
    console.log(descriptor, typeof descriptor);
};
exports.myDecorator = myDecorator;
const AmmoDescription = (args) => (parent, prop) => {
    console.log(parent, prop, args);
};
class Gun {
    constructor() {
        this.ammo = 10;
    }
    fire() {
        console.log('Firing in 3... 2... 1... 🔫');
    }
}
__decorate([
    exports.myDecorator
], Gun.prototype, "fire", null);
__decorate([
    AmmoDescription('9/3')
], Gun.prototype, "ammo", void 0);
