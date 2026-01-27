let nome = "Benedito" ;
let profissao = "Pessoa Desenvolvedora"
let salarioBruto = 3090.90;
let bonus = 0.5;

console.log("O tipo da variavel nome é: ", typeof (nome))

console.log("Salario Liquido: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(salarioBruto + (bonus * salarioBruto))
)