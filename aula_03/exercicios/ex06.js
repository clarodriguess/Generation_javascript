const leia = require('readline-sync');

let nome = leia.question("Digite seu nome: ")

console.log("CARGO:")
console.log("1 - GERENTE")
console.log("2 - VENDEDOR")
console.log("3 - SUPERVISOR")
console.log("4 - MOTORISTA")
console.log("5 - ESTOQUISTA")
console.log("6 - TECNICO DE TI")

let cargo = leia.questionInt("Digite o codigo do seu cargo: ")
let salario = leia.questionFloat("Digite seu salario: ")
let reajuste;

console.log("===================================")

switch (cargo) {
    case 1:
        reajuste = 0.10;
        console.log(`Nome do Colaborador: ${nome}`)
        console.log(`Cargo: Gerente`)
        console.log(`Novo Salario: R$${salario + (salario * reajuste)}`)
        break;
    case 2:
        reajuste = 0.07;
        console.log(`Nome do Colaborador: ${nome}`)
        console.log(`Cargo: Vendedor`)
        console.log(`Novo Salario: R$${salario + (salario * reajuste)}`)
        break;
     case 3:
        reajuste = 0.09;
        console.log(`Nome do Colaborador: ${nome}`)
        console.log(`Cargo: Supervisor`)
        console.log(`Novo Salario: R$${salario + (salario * reajuste)}`)
        break;
    case 4:
        reajuste = 0.06;
        console.log(`Nome do Colaborador: ${nome}`)
        console.log(`Cargo: Motorista`)
        console.log(`Novo Salario: R$${salario + (salario * reajuste)}`)
        break;
    case 5:
        reajuste = 0.05;
        console.log(`Nome do Colaborador: ${nome}`)
        console.log(`Cargo: Estoquista`)
        console.log(`Novo Salario: R$${salario + (salario * reajuste)}`)
        break;
    case 6:
        reajuste = 0.08;
        console.log(`Nome do Colaborador: ${nome}`)
        console.log(`Cargo: Tecnico de TI`)
        console.log(`Novo Salario: R$${salario + (salario * reajuste)}`)
        break;
    default:
        console.log("Opção invalida")
        break;
}
