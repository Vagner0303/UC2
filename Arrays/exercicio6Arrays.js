// A Jornada do Heroi ⚔️☄️

//===============================================

//  Em um reino distante, um jovem e tslentodoso desenvolvedor descobre uma espada magica que revela seu destino como heroi. Com coragem e poucos recursos, ele parte em uma jornada desafiadora...

// 1. O CENARIO: O jogador é um heroi que embarca em uma jornada épica. Ao longo do caminho, ele encontrara inimigos, coletara itens e enfrentara desafios.

//===============================================

// 2. Criando inventario do Herói:
// o herói começa sua aventura com alguns itens basicos. Vamos armazenar esses itens em uma array.

let inventario = ["Espada do gigante: 4", "Escudo da coragem: 3", "Elixir da sabedoria: 5", "Botas da Agilidade: 3", "Amuleto do Guardião: 15"]

//===============================================

// 3. Exibindo o inventario inicial do heroi.

console.log(("Inventario do Herói: "), inventario)

//===============================================

// 4. Encontrando um tesouro
// O Herói encontra um baú de tesouro e ganha um novo item!!!!

inventario.push("Arco das variáveis")
console.log( ("Quantidade de itens no inventario: "), inventario.length)
console.log()
//================================================

// 5. Enfrentando um inimigo.
// o herói enfrenta um goblin chamado GoblinDoTigrinho. Qual arma você vai escolher? tem 15 pontos:

console.log("um globin apareceu!!! Prepare-se para a batalha!!! Dano: 13")

//Usando item do iventario para lutar

let itemUsado1 = inventario[0]
console.log(`Você ataca o goblin com sua ${itemUsado1}`)
//=================================================

// 6. O goblin sentiu o golpe.......  agora ele tenta seu ultimo ataque com um dano de 3! Como você finaliza esse adversario?
let itemUsado2 = inventario[0]

console.log(`Você Finaliza o goblin com ${itemUsado2}` )

// 7. Um Golem Aproveita sua distração e o ataca violentamente com um soco sismico! Dano: 9.. Como você revida?
let itemUsado3 = inventario[0]
console.log(`Você revida com ${itemUsado3}`)

recursosResistencia = 
console.log(`Meus recursos de resistencia: $(recursosResistencia)`)
// 8. Finalizando a aventura... por enquanto... Nosso adeus não é para sempre... 
// Como você finalizaria o golem? 

itemUsado4 = inventario[0]

console.log(`O herói finaliza sua aventura com um golpe, utilizando : ${itemUsado4}` )
