function mostrarPergunta(tipo){
let pergunta =""
if(tipo === "soft"){

pergunta =  "Qual foi o maior desafio que vocês tiveram?"

}else if(tipo === "hard"){
    
pergunta =  "Qual tipo de linguagem de programação que vocês tem mais facilidade?"

}else{
pergunta = "tipo desconhecido"
}
// Mostrar a pergunta na tela dentro da div com id="pergunta"
document.getElementByld("pewrgunta").textContent = "❓" + pergunta
// Abre uma caixa de prompt para o usuario digita sua resposta
const resposta = prompt(pergunta)
// Verifica se o usuario digitou alguma coisa
if(resposta){
// Mostra a resposta na tela 
document.getElementById("resposta").
textContent = "Nenhuma resposta fornecida"

}
}

