function random(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== "string"){
            reject("bad value") 
            return
        } 
        setTimeout(()=>{
            resolve(msg.toUpperCase() + "Passei na promise")
        },tempo)
    }) 
}

esperaAI("fase 1", random(0,3))
    .then(valor => {
        console.log(valor)
        return esperaAI("fase 2 ", random(1,5))
    })
    .then(fase =>{
        console.log(fase)
        return esperaAI("fase 3", random(1,2))
    })
    .then(fase =>{
        console.log(fase)
        return fase
    })
    .then(fase => {
        console.log("terminameos na fase", fase)
    })
    .catch(e =>{
        console.log(e)
    })