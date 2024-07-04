const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite o nome do seu Herói: ", function(NomedoHeroi) {
    console.log("Nome do Herói:", NomedoHeroi);

    
    rl.question("Digite a experiência do seu Herói (um número): ", function(experienciadoHeroi) {
        experienciadoHeroi = parseInt(experienciadoHeroi); // Converte a entrada para um número inteiro

       
        let nivel = '';

       
        if (experienciadoHeroi < 1000) {
            nivel = 'Ferro';
        } else if (experienciadoHeroi <= 2000) {
            nivel = 'Bronze';
        } else if (experienciadoHeroi <= 5000) {
            nivel = 'Prata';
        } else if (experienciadoHeroi <= 7000) {
            nivel = 'Ouro';
        } else if (experienciadoHeroi <= 8000) {
            nivel = 'Platina';
        } else if (experienciadoHeroi <= 9000) {
            nivel = 'Ascendente';
        } else if (experienciadoHeroi <= 10000) {
            nivel = 'Imortal';
        } else {
            nivel = 'Radiante';
        }

        console.log(`O Herói de nome ${NomedoHeroi} está no nível de ${nivel}`);

        
        rl.close();
    });
});
