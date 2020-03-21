class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getName() {
        return this.name + " " + this.surname.toUpperCase()
    }

    getInitials(){
        return this.name[0].toUpperCase() + "." + this.surname[0].toUpperCase() + "."
    }

}

let jan = new Person("Jan", "Kowalski")
let me = new Person("Michał", "Rosicki")

console.log(jan.getName())
console.log(jan.getInitials())
console.log(me.getName())
console.log(me.getInitials())