const Person = {
    firstName: "Madhu",
    lastname: "Dora",
    printFullName: function(){
        console.log(`${this.firstName} ${this.lastname}`)
    }
}

Person.printFullName()
//  BIND call apply classes

class Person1 {
    constructor() {
        const proto = Object.getPrototypeOf(this)
        console.log(Object.getOwnPropertyNames(proto));
        
    }
    printName(){}
    printAge(){}
}

new Person1();

// Super