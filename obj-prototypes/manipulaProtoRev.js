//new Object -> Object.prototype
const objA = {
    chaveA: "A"
    //__proto__: Object.prototype -> isso acontece por b aixo dos panos ao criar um objeto
};

const objB = {
    chaveB: "B"
    //__proto__: Object.prototype -> isso acontece por b aixo dos panos ao criar um objeto
};

const objC = {
    chaveC: "C"
    //__proto__: Object.prototype -> isso acontece por b aixo dos panos ao criar um objeto
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);


