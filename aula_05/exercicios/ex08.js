const leia = require("readline-sync");

let vetor = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
  vetor[i] = leia.questionInt("Digite um numero: ");
  soma += vetor[i];
}
let media = soma / vetor.length;
console.log("Elementos nos indices impares:");
for (let i = 0; i < vetor.length; i++) {
  if (i % 2 !== 0) {
    console.log(vetor[i]);
  }
}
console.log("Elementos pares:");
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    console.log(vetor[i]);
  }
}

console.log(`Soma: ${soma}`);
console.log(`Media: ${media.toFixed(2)}`);