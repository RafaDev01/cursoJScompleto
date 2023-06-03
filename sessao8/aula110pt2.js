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

async function executa(){
    try{
        const fase1 = await esperaAI("fase 1", random(0,3))
        console.log(fase1)

        const fase2 = await esperaAI("fase 2", random(0,3))
        console.log(fase2)

        const fase3 = await esperaAI("fase 3", random(0,3))
        console.log(fase3)
        console.log("Terminamos na fase", fase3)
    }catch(e) {
        console.log(e)
    }
}

executa()