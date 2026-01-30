const leia = require('readline-sync');

console.log("Para finalizar digite um número negativo");

let maiorDe50 = 0;
let menorDe21 = 0;
let idade = 0;

while (true) {
  idade = leia.questionInt("Digite uma idade: ");

  if (idade < 0) {
    break;
  }

  if (idade > 50) {
    maiorDe50++;
  } else if (idade < 21) {
    menorDe21++;
  }
}
console.log(`Pessoas com mais de 50 anos: ${maiorDe50}`);
console.log(`Pessoas com menos de 21 anos: ${menorDe21}`);

