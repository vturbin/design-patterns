export class Address2 {
    constructor(private zip:string, private street:string) {
      this.zip = zip
      this.street = street
    }
  }
  
  class User2 {
    public name:string;
    public age:number;
    public phone:string;
    public address:Address2;

    constructor(name: string, { age, phone = '123-456-7890', address }: {age?:number, phone?: string,address?: Address2} = {} ) {
      this.name = name
      this.age = age
      this.phone = phone
      this.address = address
    }
  }
  
  const user2 = new User2('Bob', { address: new Address2('12345', 'Main St.') })