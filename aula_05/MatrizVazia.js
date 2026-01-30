const leia = require ('readline-sync');

let matriz = new Array(2)

// para criar as colunas precisa do laço de repeticao
for (let i = 0; i < matriz.length; i++){
    matriz[i] = new Array(3)
}

console.log(matriz)
console.table(matriz)

//para inserir valores 
// primeiro ele preenche as linhas - ex. 0 0 / 0 1 / 0 2
for (let linha = 0; linha < matriz.length; linha++){
    for (let coluna = 0; coluna < matriz[linha].length; coluna++){
        matriz[linha][coluna] = leia.questionInt("Digite um numero:")
        }
}
console.table(matriz)


// criando matriz vazia de forma reduzida 

let matrizInteiros = Array.from({ length: 2 }, () =>
        Array.from({ length: 3 },
             () => leia.questionInt("Digite um numero: ")) 
);
console.table(matrizInteiros)
// metodo:
//Array.from({ length: N }, funcao) 
// cria um novo array com N posições. 
// Para cada posição, ele executa a funcao fornecida para determinar o valor que será guardado ali.