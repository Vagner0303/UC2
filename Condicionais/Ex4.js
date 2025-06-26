function escolherRoupas(){

}
let temperatura = Number(prompt("Digite a temperatura atual em graus: "));

if(temperatura > 30){
    alert("Vista roupas leves.Esta muito quente! ");

}else if(temperatura >= 20 && temperatura <= 30){
    
    alert("Use algo confortavel,como camisa e calça");
}
else if(temperatura >= 10 && temperatura <= 19){
alert("Coloque casaco. Está fresquinho");

}else if (temperatura<10){
alert("Use casaco bem quente! Esta frio.");
}else{
    (temperatura >= -10 && temperatura <= 50)
    alert("Por favor, informe a temperatura valida!")
}
escolherRoupa()
