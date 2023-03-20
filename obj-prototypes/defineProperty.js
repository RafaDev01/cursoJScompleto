//defineProperty - //defineProperties
//voce terá muito mais controle sobre o obj, é interessante usar em informações mais sensiveis

function Produto(nome,preco,estoque){

//vamos imaginar que a propriedade estoque seja travada
    Object.defineProperty(this, "Estoque", {
        enumerable: true,  //mostra a chave
        value: estoque,    //valor
        writable: false,   //alterar o valor
        configurable: true //reconfigurar a chave
    })

    Object.defineProperties(this,{
        nome: {
            enumerable: true,  
            value: nome,   
            writable: true,   
            configurable: true 
        },
        preco: {
            enumerable: true,  
            value: preco,    
            writable: true,   
            configurable: true
        },
    })
}

const p1 = new Produto("Camiseta" ,20 ,3)

console.log(p1)