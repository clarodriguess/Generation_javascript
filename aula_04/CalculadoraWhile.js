const leia  = require ('readline-sync');

// let continua = 'S'
let continua = true

// while (continua === 'S'){
while (continua) {
console.log("===============================")
console.log("           CALCULADORA         ")
console.log("===============================")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")
console.log("===============================")
console.log("                               ")

let numero1 = leia.questionFloat("Digite o primeiro numero: ",
                                {limitMessage: 'Digite um numero float'}
                                )
let numero2 = leia.questionFloat("Digite o segundo numero: ",
                                {limitMessage: 'Digite um numero float'}
                                )
let operacao = leia.questionInt("Digite a operacao: ")

switch(operacao){
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
        break 
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`)
        break
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`)
        break
    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
        break
    default:
        console.log("Operação invalida")
}
    // continua = leia.keyIn("Deseja continuar? (S/N) ").toUpperCase()
    continua = leia.keyInYN("Deseja continuar?")

}
