
export class FancyCounter {

    private count: number = 0;
    private static instance: FancyCounter

	constructor() {
		if (FancyCounter.instance) {
			return FancyCounter.instance;
		}
		FancyCounter.instance = this;
		return this;
	}
  
	getCount() {
		return this.count;
	}
  
	increaseCount() {
		return this.count++;
	}
}

const counter = new FancyCounter();
const counter2 = new FancyCounter();

console.log('Are Instances the same object?', counter === counter2);
console.log('Instances counter', counter.getCount(), counter2.getCount());
console.log('Increasing count for one counter instance');

counter.increaseCount();
console.log('Instance counter after increase', counter.getCount(), counter2.getCount());
