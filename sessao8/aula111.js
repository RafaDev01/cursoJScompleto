const request = obj =>{
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send(null)

    xhr.addEventListener("load", ()=>{
        //aqui ja vai ter recebido a resposta
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText)
        }else{
            obj.console.error(xhr.statusText);
        }
    })
}

document.addEventListener("click", e =>{
    const el = e.target
    const tag = el.tagName.toLowerCase()
    e.preventDefault()
    if(tag === "a"){
        carregaPagina(el)
    }
})

function carregaPagina(el){
    const href = el.getAttribute("href")
    
    request({
        method: "GET",
        url: href,
        success(response){
            carregaResultado(response)
        },
        error(errorText){
            console.log(errorText)
        }
    })
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}