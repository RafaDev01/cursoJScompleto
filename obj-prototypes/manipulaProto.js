//new Object -> Object.prototype
const objA = {
    chaveA: "A"
    // __proto__: Object.prototype
}

const objB = {
    chaveA: "B"
    // __proto__: objA
}

const objC = {
    chaveA: "C"
    // __proto__: objB
}

//O objA sera o prototype de B
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA)

