//poderia ser um padrão de projeto
//Factory function / Constructor function /Classes

function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa("Luiz","Otavio");
console.log(p1.nomeCompleto)