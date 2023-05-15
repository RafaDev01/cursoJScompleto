//Produto -> aumento de preco, desconto
//Camiseta = cor, caneca = material

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco)
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percetual){
    this.preco = this.preco + (this.preco * (percetual / 100))
}

function Caneca(nome,preco,material,estoque){
    Produto.call(this, nome, preco)
    this.material = material;

    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,

        get: function(){
            return estoque;
        }
        ,
        set: function(valor){
            if(typeof valor !== "number") return;
            estoque = estoque += valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta("Regata", 7.5, "Preto")

const caneca = new Caneca("Dia da Maes",30,"Porcelana",5)
caneca.estoque = 150;

console.log(caneca.estoque)
console.log(camiseta)
console.log(Produto)