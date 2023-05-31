function criaPessoa(nome,sobrenome) {
    const pessoaPrototype = {
        fala(){
            console.log(`${this.nome} está falando`)
        },
        comer(){
            console.log(`${this.nome} está comendo`)
        },
        beber(){
            console.log(`${this.nome} está bebendo`)
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa("Luiz", "Otavio")
const p2 = criaPessoa("Maria", "Atavio")

console.log(p1)
console.log(p2)