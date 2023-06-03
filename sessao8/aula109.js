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

//Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    esperaAI("Promise 1", 3000),
    esperaAI("Promise 2", 500),
    esperaAI("Promise 3", 1000),
]

Promise.race(promises)
    .then(valor => {
        console.log(valor)
    })
    .catch(erro =>{
        console.log(erro)
    })