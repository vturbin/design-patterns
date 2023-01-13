const defaultGun = (gun: Function) => {
  console.log('-- decorator function invoked --');
  return class extends Gun {
    ammo = 10;
  };
};

@defaultGun
class Gun {
  constructor() {
    console.log('-- this constructor invoked --');
  }
}

console.log('-- creating an instance --');
const gun = new Gun();
console.log(gun); // => 10
