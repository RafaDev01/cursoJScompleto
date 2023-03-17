function criaPessoa(nome,sobrenome,alt,p){
    return {
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(" ")
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ")
        },

        fala: function(assunto = "sobre nada"){
            return `${this.nome} está falando ${assunto}`
        },
        altura: alt,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa("Luiz", "Otávio",1.78,70)
const p2 = criaPessoa("Maria", "Joaquina",1.60,62)

p1.nomeCompleto = "Jubielu jacinto pinto dos santos almeida"
console.log(p1.nomeCompleto)

console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())