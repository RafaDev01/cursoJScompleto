/*
    JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro

    Definição de protótipo
    Protótipo é o termo usado para se refletir ao que foi criado pela primeira vez,
    servindo de modelo ou molde para futuras produções
    Todos os objetos tem uma referência interna para um prototipo (__proto__)
    que vem da propriedade prototype da funcao construtora que foi usada para
    criá-lo. Quando tentamos acessar um membro de um prórpio objeto, primeiro o motor
    do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é
    usada até o topo (null) até encontrar (ou não) tal membro.
*/ 

//Construtora -> molde(classe)
function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function(){ return this.nome + " " + this.sobrenome} 

//instancia
const pessoa1 = new Pessoa("Luiz","O.") // <- Pessoa = funcao construtora
const pessoa2 = new Pessoa("Maria","A.")

//Pessoa.prototype === pessoa1.__proto__

console.dir(pessoa1)
console.dir(pessoa2)