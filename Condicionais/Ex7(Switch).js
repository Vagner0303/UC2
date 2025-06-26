
function diaSemana(){
//Pedindo para o usuario para digitar um numero de 1 a 5
let dia = Number(prompt("Digite um numero de 1 a 5 para o dia da semana: "))
//Verificando com o switch qual dia foi escolhido
switch (dia){

case 1:
    //se o numero foi 1
alert(" Segunda-feira: Merda ");
break
case 2:
    //Se o numero for 2
    alert(" Terceira-Feira: Tabom ");
    break
    case 3:
        // Se o numero for 3
        alert(" Quarta-feira: mais um dia ");
        break
        case 4:
//Se o numero for 4
alert(" Quinta-Feira: quase Sexta! ");
break
case 5:
    alert("Sexta-Feira: Gloria!!");
break

default:
    alert(" Dia invalido! ");

}
}
diaSemana()
