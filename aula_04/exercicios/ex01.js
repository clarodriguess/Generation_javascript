const leia = require ('readline-sync');

console.log("MULTIPLOS DE 3 E 5 NO INTERVALO")

let primeiroNumero = leia.questionInt("Digite o primeiro numero do intervalo: ")
let ultimoNumero = leia.questionInt("Digite o ultimo numero do intervalo: ")

if (primeiroNumero < ultimoNumero){

    console.log(`No intervalo entre ${primeiroNumero} e ${ultimoNumero}:`)

    for (let i = primeiroNumero; i < ultimoNumero; i++ ) {
        if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e de 5`);
    }
} 
}else {
    console.log("Entrada invalida. O ultimo numero deve ser maior que o primeiro numero")
} 

