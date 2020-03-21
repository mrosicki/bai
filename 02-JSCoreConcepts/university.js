names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let start = []
        for (let name of this.names) {
            if (name[0] == letter){
                start.push(name)
            }
        }
        return new Students(start)
    }

    sort() {
        let sorted = Array.from(this.names);
        sorted.sort()
        return new Students(sorted)
    }

    get() {
        return new Students(this.names)
    }

    getFirst(n) {
        let first = []
        for (let i=0; i<n; i++){
            first.push(this.names[i])
        }
        return new Students(first)
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



