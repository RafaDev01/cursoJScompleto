//Filter > retorna sempre um array com a mesma quantidade de elementos ou menos

//não vai editar o array orginal
//Retorne os números maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

//Quando temos só uma linha o return é implicito
const numFiltrados = numeros.filter( valor => valor > 10);
console.log(numFiltrados)

const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47},
]
