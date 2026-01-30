const leia = require('readline-sync');

console.log("-----------------------------")
console.log("SOMA DOS NUMEROS POSITIVOS")
console.log("Para finalizar digite 0")
console.log("-----------------------------")

let numero = 0;
let soma = 0;

do {
    numero = leia.questionInt("Digite um numero: ");
    if (numero > 0) {
        soma += numero;
    }
} while (numero !== 0);
console.log("-----------------------------")
console.log(`A soma dos numeros positivos é: ${soma}`)