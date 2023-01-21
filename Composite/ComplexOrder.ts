export interface Item {
    getPrice(): number;
}

class Product implements Item {
    constructor(private name: string, private price: number){}

    public getName(): string {
        return this.name
    }

    public getPrice(): number {
        return this.price
    }
}

class Box implements Item {
    private items: Item[] = [];

    public addItem(item: Item) {
        this.items.push(item)
    }

    public removeItem(item: Item) {
        this.items.push(item)
    }

    public getItems(): Item[] {
        return this.items
    }

    public getPrice(): number {
        return this.items.map(item=> item.getPrice()).reduce((price1,price2)=> price1 + price2)
    }
}

const box1 = new Box()
box1.addItem(new Product('Hammer',10))
box1.addItem(new Product('Nails',5))

const box2 = new Box()
box2.addItem(new Product('Phone',655))
box2.addItem(new Product('Headphones',55))
box2.addItem(new Product('Wireless Charger',24))

const box3 = new Box()
box3.addItem(new Product('Display',290))
box3.addItem(new Product('Mouse',65))
box3.addItem(new Product('Keyboard',50))

const bigBox = new Box()
bigBox.addItem(box1)
bigBox.addItem(box2)
bigBox.addItem(box3)

console.log('Total order price: ',bigBox.getPrice())