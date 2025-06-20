// importa o Prompt Sync
const prompt = require('prompt-sync')();

// Pede o nome do usuario
const nome = prompt('Qual é o seu nome? ');

// Pede a idade do usuario
const idade = prompt('Quantos anos você tem? ');

// Exibe a resposta no terminal 
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);