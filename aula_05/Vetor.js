const leia  = require ('readline-sync');
let numeros = [50, 20, 70, 40, 14]

let cores = Array(5)

for (let i =0; i < numeros.length; i++){
    console.log(`numeros [${i}] = ${numeros[i]}`)
}
console.log(`o tamanho do vetor numeros é ${numeros.length}`)
console.table(numeros)

for (let i =0; i <cores.length; i++){
    cores[i] = leia.question("Digite uma cor: ")
}
console.table(cores)

//arrow function para ordenar o vetor em ordem crescente
console.table(numeros.sort((a,b)=>(a-b)))

//para ordenar o vetor em ordem decrescente
console.table(numeros.sort((a,b)=>(b-a)))

// indexOf retorna em q posicao o elemento esta
// se nao encontrar retorna -1a
console.log("Qual a posiçao do elemento 40 no vetor numeros?", numeros.indexOf(40))


