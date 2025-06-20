// Desafio 🏃🏾🫵🏿

let NF = 6 //Nota Final
let NR = 8 // Nota de Recuperação
let T1 = 7 // Nota Trabalho 1
let T2 = 9 // Nota Trabalho 2
let T3 = 5 // Nota Trabalho 3

// Logica de Aprovação

let trabalhosAprovados = (T1 > 6) + (T2 > 6) + (T3 > 6) //Soma dos Trabalhos Aprovados

// Juntando as considerações do problema
let aprovado = (NF > 7) || (NR >= 8 && trabalhosAprovados >= 2)

console.log(aprovado)//Exibe true aprovado ou false reprovado