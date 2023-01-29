"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserSubscriber {
    constructor(name) {
        this.name = name;
    }
    update(newspaper) {
        this.newspaper = newspaper;
        this.display();
    }
    display() {
        console.log(`${this.name} received newspaper: ${this.newspaper}`);
    }
}
class NewspaperAgency {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.newspaper));
    }
    publishNewspaper(newspaper) {
        this.newspaper = newspaper;
        this.notifyObservers();
    }
}
const newspaperAgency = new NewspaperAgency();
const subscriber1 = new UserSubscriber('Jack');
const subscriber2 = new UserSubscriber('Daniels');
newspaperAgency.addObserver(subscriber1);
newspaperAgency.addObserver(subscriber2);
newspaperAgency.publishNewspaper("Today's edition of The Times");
