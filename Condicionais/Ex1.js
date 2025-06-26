// Função que compara 2 numeros (num1, num2)


function comparaNumeros(num1, num2){

// Trabalhando com condicional... Verificando a condição (num1===num2)

if(num1 === num2){

// Se forem iguais, exibe uma mensagem de sucesso no console
alert(" Sucesso! Os números são iguais! ")

}else{
// Se a condição for verdadeira, ele executa o codigo abaixo.
alert("Que merda cara... os números não são iguais")

}

}
// Solicitar ao usuario o primeiro numero com prompt
let entrada1 = Number(prompt("Digite o primeiro número: "))
let entrada2 = Number(prompt("Digite o segundo número: "))
//Chamar a função passando as dois parâmetros
comparaNumeros(entrada1,entrada2)