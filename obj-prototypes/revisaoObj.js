//um objeto é formado por par,chave,valor

const pessoa = {
    nome: "Luiz",
    sobrenome: "Otavio"
}

// const chave = "nome"
// //A notação de colchete pode receber um valor dinamico
// console.log(pessoa[chave])
// console.log(pessoa["sobrenome"])

//a notação de ponto é mais intuitiva

//podemos usar o construtor do OBJ

const pessoa1 = new Object();

pessoa1.nome = "Luiz"
pessoa1.sobrenome = "Otavio"
// delete pessoa1.nome
pessoa1.idade = 30
pessoa1.falarNome = function(){
    return `${this.nome} esta falando seu nome`
}
pessoa1.getDataNasc = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

pessoa1.falarNome()

for(let chave in pessoa1){
    console.log(pessoa1[chave])
}