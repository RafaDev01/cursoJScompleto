document.addEventListener("click", e =>{
    const el = e.target
    const tag = el.tagName.toLowerCase()
    e.preventDefault()
    if(tag === "a"){
        carregaPagina(el)
    }
})

async function carregaPagina(el){
    try{
        const href = el.getAttribute("href")
        const response = await fetch(href)

        //pode fazer um test de status da requisicao

        const html = await response.text()
        carregaResultado(html)
    }catch(e){
        console.log(e)
    }
}
    

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

/*
fetch("pagina5.html")
    .then(response => {
        if(response.status !== 200) 
        throw new Error("erro 404") 
        return response.text()
    })
    .then(html => {
        console.log(html)
    })
    .catch(e => console.warn(e))
*/
