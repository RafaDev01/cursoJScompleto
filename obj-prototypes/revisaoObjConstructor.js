//Constructor function

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    //nenhum valor do obj criado podera ser alterado nem adicionado
    Object.freeze(this)
}

//não pode esquecer a palavra new, a plavra new cria um obj vazio{} <- coloca a plavra this atrleada ao obj especifico e retorna o obj
const p1 = new Pessoa("Luiz","Miranda")
const p2 = new Pessoa("Maria","Miranda")
console.log(p1)
console.log(p2)
