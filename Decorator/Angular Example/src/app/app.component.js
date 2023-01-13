"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        console.log('Hello from Class constructor');
    }
    ngOnInit() {
        console.log(this.value1);
        console.log(this.value2);
    }
};
AppComponent = __decorate([
    EmptyDecorator,
    SimpleDecorator({
        value1: '100',
        value2: '200'
    }),
    (0, core_1.Component)({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
exports.AppComponent = AppComponent;
// Decorator without arguments
function EmptyDecorator(target) {
    console.log('Hello from Empty Decorator');
}
// Decorator with arguments
function SimpleDecorator(args) {
    console.log(args);
    return function (target) {
        console.log('Hello from Decorator');
        console.log(typeof target);
        console.log(target);
        Object.defineProperty(target.prototype, 'value1', {
            value: args.value1,
            writable: false
        });
        Object.defineProperty(target.prototype, 'value2', {
            value: args.value2,
            writable: false
        });
    };
}
