function random(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== "string") reject("bad value")
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    }) 
}

esperaAI("Frase01", random(1,3))
    .then(response => {
        console.log(response)
        return esperaAI("Frase2", random(1,3))
    })
    .then(respose =>{
        console.log(respose)
        return esperaAI(2222, random(1,3))
    })
    .then(response =>{
        console.log(response)
    })
    .catch(e =>{
        console.log("deu erro", e)
    })