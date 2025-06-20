// Exercicio Splice

let deck = ["Pikachu", "Charmander", "Bulbasauro", "Pikachu", "Squirtle", "Meowth"];
// 1. remover o repetido (indice 3)
deck.splice(3, 1)
console.log(deck)


// 2. inserir o Snorlax entreb 3 e 4
deck.splice(3,0, "Snorlax")
console.log(deck)


// 3. Adicionar a Eeve no lugar do Meowth
deck.splice(5,1, "Eeve")

// 4. Imprimir 
console.log(deck)

