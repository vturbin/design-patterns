export class Address1 {
    constructor(private zip:string, private street:string) {
      this.zip = zip
      this.street = street
    }
  }
  
  class User1 {
    constructor(private name: string, private age:number, private phone: string, private address: Address1) {
      this.name = name
      this.age = age
      this.phone = phone
      this.address = address
    }
  }
  
  const user1 = new User1('Bob', null, null, new Address1('12345', 'Main St.'))