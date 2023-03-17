//funcao constrututora -> objetos
//Funcao fabrica -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome,sobrenome){
    const id = 12345;

    const metodoInterno = function(){

    };

    this.nome = nome
    this.sobrenome = sobrenome

    this.apresentar = () =>{
        console.log("Olá eu sou " + this.nome + " " + id)
    };
}

let p1 = new Pessoa("Rafael","Nascimento")

console.log(p1.apresentar())