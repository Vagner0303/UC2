console.log('Exercicio 3!!')

let numeroInicial = 8
let multiplicador = 5
let divisor = 4

//1. Multiplicando o numero inicial
let passo1 = numeroInicial * multiplicador 
console.log("1. multiplicando o numero inicial pessoal", passo1)

///2. Dividindo o esultado pelo divisor
let passo2 = passo1 / divisor

console.log("2. Dividindo o resultado pelo divisor", passo2)

//3. Calculando o resto da divisão entre esse resultado e 7
let passo3 = passo2 % 7
console.log("3. O resto da divisão por 7 é: ", passo3)

//4. Somando 10 ao valor obtido
let passo4 = passo3 + 10
console.log("4. somando 10: ", passo4)

//5. subitraindo 3 vezes ao numero inicial
let resultadoFinal = passo4 - (3 * numeroInicial)
console.log("5. Subitraindo 3 vezes o numero inicial: ", resultadoFinal)

//Resultado Final
console.log("🌟 o resultado final do Feiticeiro Algoritimo é: ", resultadoFinal)