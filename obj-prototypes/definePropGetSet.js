function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque

    Object.defineProperty(this, "estoque", {
        enumerable: true,
        // value: estoque,
        // writable: true,
        configurable: true,
        get: function(){
            return estoquePrivado
        },
        set: function(value){
            if(typeof value !== "number"){
                throw new TypeError("msg")
            }
            estoquePrivado = value
        } 
    })
}

const p1 = new Produto("Camiseta", 20, 3)
p1.estoque = 10000
console.log(p1.estoque)