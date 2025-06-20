const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.studout
});

rl.question("Qual é o seu nome? ", function(name) {
    console.log(`Olá, ${name}! `);
    rl.close();
});



