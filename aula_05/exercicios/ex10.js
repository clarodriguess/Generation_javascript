const leia = require("readline-sync");

let notas = [];      
let medias = [];     

//matriz 10 linhas
for (let i = 0; i < 10; i++) {
  notas[i] = [];
  let soma = 0;

  console.log(`\nAluno ${i + 1}:`);
  //matriz 4 colunas
  for (let j = 0; j < 4; j++) {
    notas[i][j] = leia.questionFloat(`Digite a nota do bimestre ${j + 1}: `);
    soma += notas[i][j];
  }
  medias[i] = soma / 4;
}

console.log(
   medias.map(m => m.toFixed(1))
);
