import { Component } from '@angular/core';

@EmptyDecorator
@SimpleDecorator({
  value1: '100',
  value2: '200'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  constructor() {
    console.log('Hello from Class constructor');
  }
 
  ngOnInit() {
    console.log((this as any).value1);
    console.log((this as any).value2);
  }
}

// Decorator without arguments
function EmptyDecorator(target:Function) {
  console.log('Hello from Empty Decorator');
}

// Decorator with arguments
function SimpleDecorator(args:SimpleDecoratorArgs) {
  console.log(args);
 
  return function(target: Function) {
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


interface SimpleDecoratorArgs {
  value1: string;
  value2: string;
}