//Estudo de caso
//

const pessoas = [
    {id: 3, nome: "Luiz"},
    {id: 2, nome: "Maria"},
    {id: 1, nome: "Helena"}
]

/*
//Dessa forma a chave e a ordem foi modificada
const novasPessoas = {}
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = { ...pessoa}
}
*/

//Dessa forma a chave e ordem nao foi modificada
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const  { id } = pessoa;
    novasPessoas.set(id, { ...pessoa})
}

for(const [pessoa of novasPessoas]){
    console.log()
}