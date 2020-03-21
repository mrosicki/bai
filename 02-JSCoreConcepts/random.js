const fill = (arr) => {
    arr.length = 0
    for(let i=0; i<10; i++){
        arr.push(Math.floor((Math.random()*16)+5));
    }
}

const print = (arr) => {
    console.log(arr)
}

let array = []
fill(array)
print(array)