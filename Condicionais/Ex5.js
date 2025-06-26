function escolherPersonagem(){

    let personagem = prompt("Digite o seu personagem: Guerreiro, Mago ou Arqueiro").toLowerCase()
    let nivel = Number(prompt("Escolha um numero de 1 a 100: "))
    

if(personagem ==="guerreiro" && nivel>=50){

    alert(" Você é um guerreiro lendário ")
}else if(personagem === "mago" && nivel >= 50){
    
    alert(" Você domina a magia suprema! ")
}
else if(personagem === "arqueiro" && nivel >= 50){
alert(" Você é um mestre das flechas! ")

}else{
   
    alert("Continue treinando.Heroi iniciante!")
}
 
}

escolherPersonagem()
