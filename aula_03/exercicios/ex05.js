const leia = require('readline-sync');

console.log("                 CARDAPIO                    ")
console.log("=============================================")
console.log("1 - CACHORRO QUENTE  ---------------- R$10,00")
console.log("2 - X-SALADA  ----------------------- R$15,00")
console.log("3 - X-BACON  ------------------------ R$18,00")
console.log("4 - BAURUCA  ------------------------ R$12,00")
console.log("5 - REFRIGERANTE  -------------------- R$8,00")
console.log("6 - SUCO DE LARANJA  ---------------- R$13,00")
console.log("=============================================")

let produto = leia.questionInt("Digite o numero do produto: ")
let quantidade = leia.questionInt("Digite a quantidade: ")

let NomeProduto;
let valorUnitario;

switch (produto) {
    case 1:
        NomeProduto = "CACHORRO QUENTE";
        valorUnitario = 10;
        console.log(`Produto: ${NomeProduto}`)
        console.log(`Valor total: R$${quantidade * valorUnitario}`)
        break;
    case 2:
        NomeProduto = "X-SALADA";
        valorUnitario = 15;
        console.log(`Produto: ${NomeProduto}`)
        console.log(`Valor total: R$${quantidade * valorUnitario}`)
        break;
    case 3:
        NomeProduto = "X-BACON";
        valorUnitario = 18;
        console.log(`Produto: ${NomeProduto}`)
        console.log(`Valor total: R$${quantidade * valorUnitario}`)
        break;
    case 4:
        NomeProduto = "BAURU";
        valorUnitario = 12;
        console.log(`Produto: ${NomeProduto}`)
        console.log(`Valor total: R$${quantidade * valorUnitario}`)
        break;
    case 5:
        NomeProduto = "REFRIGERANTE";
        valorUnitario = 8;
        console.log(`Produto: ${NomeProduto}`)
        console.log(`Valor total: R$${quantidade * valorUnitario}`)
        break;
    case 6:
        NomeProduto = "SUCO DE LARANJA";
        valorUnitario = 13;
        console.log(`Produto: ${NomeProduto}`)
        console.log(`Valor total: R$${quantidade * valorUnitario}`)
        break;
    default:
        console.log("Opção invalida")
        break;
}