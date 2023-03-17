//map ->pode alterar o array original -> manterá sempre o mesmo tamanho do array original
//dobre os numeros

// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
// const numDobro = numeros.map( valor => valor * 2)
// console.log(numDobro)

//Para cada elemento:
const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47},
]

//Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome)


//-----------------------> Remova apenas a chave "nome" do obj
// const idades = pessoas.map(obj => {
//     delete obj.nome
//     return obj
// })
//----> abaixo estamos fazendo a mesma coisa que acima
//sintaxe necessaria para conseguir realizar em uma unica linha -> use ((expressar)) -> para corrigir
const idades = pessoas.map(obj => ({idade: obj.idade }))


//********** ATENCAO
//--> PARA NÃO ALTEAR O OBJ ORIGINAL É NECESSÁRIO CRIAR UM NOVO OBJETO  
//Adicione uma chave id em cada obj
const comIds = pessoas.map((obj,index)=>{
    const newObj = {...obj}
    newObj.id = index
    return newObj 
})

console.log(comIds)