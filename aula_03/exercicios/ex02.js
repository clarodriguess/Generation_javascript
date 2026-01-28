const leia = require('readline-sync');

console.log ("O numero é par ou impar? Negativo ou Positivo?")
let numero = leia.questionInt("Digite um numero: ")

if(numero % 2 == 0 && numero > 0){
    console.log("O numero é par e positivo")
}else if(numero % 2 == 0 && numero < 0){
    cosole.log("O numero é par e negativo")
}else if(numero % 2 != 0 && numero > 0){
    console.log("O numero é impar e positivo")
} else {
    console.log("O numero é impar e negativo")
}