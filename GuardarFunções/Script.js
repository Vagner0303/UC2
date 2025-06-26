// Escrevendo Funções
function dancar() {
    alert(" Você ganhou uma dancinha virtual! 🕺🏾");

}

function chamarHeroi(nomeHeroi) {
    alert(nomeHeroi.toUpperCase() + "!!!🕺🏿");
}

function criarApelido(nome, animal) {
    alert("Seu apelido é: " + nome + " " + animal + "☄️");
}

function moedasTotais(pequenas, grandes) {
    return Number(pequenas) + Number(grandes) * 5

}

function mostrarMoedas() {
    let pequenas = prompt("Quantas moedas pequenas você achou? ")

    let grandes = prompt("Quantas moedas grandes você achou? ");
    let total = moedasTotais(pequenas, grandes);
    alert("Você fez " + total + " pontos em moedas 🪙!");
}

function mostrarCodinome(coisaEngracada, numeroSorte){
   
  alert("Seu codinome é: " + coisaEngracada + numeroSorte + "🕵🏿");
  
  }

  function calcularChocolate(reais) { 

    return (reais / 2.50)
}
function mostrarChocolate(){
let din = prompt(" Digite quantos Reais você tem 💵: " )

alert( "Você consegue comprar " + calcularChocolate(Number(din))+ " Chocolates 🍫! " );
}
