
const myDecorator = (parent: Object, prop: string, descriptor: PropertyDescriptor) => {
    console.log(parent, typeof parent)
    console.log(prop, typeof prop)
    console.log(descriptor, typeof descriptor)

}

const AmmoDescription = (args: string) => (parent: Object, prop:string) => {
    console.log(parent,prop,args)
}

class Gun {

    @myDecorator
    fire() {
        console.log('Firing in 3... 2... 1... 🔫')
    }

    @AmmoDescription('9/3')
    public ammo: number = 10;
}
