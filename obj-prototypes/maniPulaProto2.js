function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.setDesconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.setPreco = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto("Camiseta" , 100)

//literal
const p2 = {
    nome: "caneca",
    preco: 30
}

//Linkado o objeto literal ao Produto da função construtora
Object.setPrototypeOf(p2, Produto.prototype)
p2.setPreco(100)

//Criando o obj, setando o prototype e ainda passando as configurações
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
})

console.log(p1)
console.log(p2)

p3.setPreco(10)
console.log(p3)