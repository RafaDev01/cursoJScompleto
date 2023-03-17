//Filter > retorna sempre um array com a mesma quantidade de elementos ou menos

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Letícia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47},
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.idade >= 5)
const pessoasComMaisCinquenta = pessoas.filter(obj => obj.idade > 50)
//endsWith("")-> verifica com qual letra termina
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith("a"))

console.log(nomeTerminaComA)
console.log(pessoasComNomeGrande)
console.log(pessoasComMaisCinquenta)
