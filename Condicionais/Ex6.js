function chapelSeletor(){
let qualidade = prompt("Qual qualidade mais define você: coragem, amizade, ambição ou sabedoria? ").toLowerCase()
if(qualidade ==="coragem"){

    alert(" Você foi escolhido para a Grifinória! ")
}else if(qualidade === "amizade"){
    
    alert(" Você foi escolhido para a Lufa-Lufa! ")
}
else if(qualidade === "ambição"){
alert(" Você foi escolhido para a Sonserina! ")

}else if(qualidade === "sabedoria"){
   
    alert("Você foi escolhido para a Convirnal!")
}else{
   
    alert("Esta casa ainda não existe!")
}
 
}

chapelSeletor()
