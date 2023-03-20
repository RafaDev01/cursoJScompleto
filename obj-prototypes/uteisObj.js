//Métodos uteis para objetos

//Copiando um objeto para outro
const produto = {nome: "Caneca", preco:1.8}
const caneca = {...produto, material: "madeira"}

Object.defineProperty(produto, "nome", {
    writable: false,
    configurable: false,
    value: "Qualquer outra coisa"
})

//ver as propriedades do obj e suas configurações
console.log(Object.getOwnPropertyDescriptor(produto, "nome"))

//ver os valores ao inves das chaves
console.log(Object.values(produto))

//ver os valores e as chaves
console.log(Object.entries(produto))

delete produto.preco
produto.nome = "outraCoisa"

for(let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor)
}