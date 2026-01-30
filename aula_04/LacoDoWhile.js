const leia  = require ('readline-sync');
let numero = leia.questionInt("Digite um numero: ")

let i = 1;

console.log("===============================")
console.log(`      Tabuada de ${numero}     `)
console.log("===============================")

do {
     console.log(`${numero} x ${i} = ${numero * i}`)
    i++;
} while (i<11);
