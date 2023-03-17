//               -5      -4      -3        -2        -1
//                0       1       2         3         4
const nomes = ["Maria","João","Eduardo","Gabriel","Julia"]

//nomes.splice(indexQueQueroComeçarAMexer,QuantosElementosQueroRemoverDoArray,ElementosParaADD,"","","")
//retorna um array

//pop

// const removidos = nomes.splice(3,2,"Luiz","Otavio","Jão","Zézinho") 
// console.log(nomes, removidos)

//shift
// const removidos = nomes.splice(0,1)

//push
// nomes.splice(nomes.length, 0, "Luiz","Otavio","Miranda")

//unshift
nomes.splice(0, 0, "Luiz","Otavio","Miranda")
console.log(nomes)