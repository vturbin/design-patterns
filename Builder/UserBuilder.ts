export class Address {
    constructor(private zip: string, private street: string) {
      this.zip = zip
      this.street = street
    }
  }
  
  class User {
    public name:string;
    public age:number;
    public phone:string;
    public address:Address;

    constructor(name:string) {
      this.name = name
    }
  }
  
  /** Let's say if you forget to call User.setId() then you get an object with a null value for a property.
   *  while if you do UserBuilder.build() you can get an exception or maybe just automatically set the ID
   *  to the next available - logic that shouldn't be in the User object */
  class UserBuilder {
    public user: User;

    constructor(name:string) {
      this.user = new User(name)
    }
  
    setAge(age:number) {
      this.user.age = age
      return this
    }
  
    setPhone(phone:string) {
      this.user.phone = phone
      return this
    }
  
    setAddress(address:Address) {
      this.user.address = address
      return this
    }
  
    build() {
      return this.user
    }
  }
  
  const builder = new UserBuilder('Bob')
  const user = builder.setAddress(new Address('12345', 'Main St.')).setAge(23).build()