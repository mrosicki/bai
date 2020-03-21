// boki trójkąta
a = 3;
b = 4;
c = 5;
// h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let fun = () => {
    let p = (a + b + c)/2
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    let ret = `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${s}.`
    return ret
}

console.log( fun() );