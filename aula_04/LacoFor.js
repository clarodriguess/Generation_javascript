const leia  = require ('readline-sync');

let numero = leia.questionInt("Digite um numero: ")

console.log("===============================")
console.log(`      Tabuada de ${numero}     `)
console.log("===============================")

for (let i = 1; i < 11; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}