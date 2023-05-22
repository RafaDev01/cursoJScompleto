//Os métodos ja são atrelados ao prototype

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }

    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa("Larissa","Nascimento")

console.log(p1)