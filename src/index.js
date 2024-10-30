// Classificador de Níveis de Heróis
console.log("==================================")
console.log("Classificador de nível de Herói")
console.log("==================================")

//let nomeHeroi = "Superman"
//let quantidadeXP = 500

function classificarHeroi(nome, xp){

    let nivel

    if (xp <= 1000) {
         nivel = "Ferro"
        console.log(`O Herói de nome ${nome} está no nível ${nivel}`)
    } else if (xp <= 2.000) {
        console.log("Bronze")
    } else if (quantidadeXP <= 2.001 && quantidadeXP <= 5.000) {
        console.log(`O Herói de nome ${nomeHeroi} está no nível Prata`) 
    }  else if (quantidadeXP <= 5.001 && quantidadeXP <= 7.000) {
        console.log("Ouro") 
    } else if (quantidadeXP <= 7.001 && quantidadeXP <= 8.000) {
        console.log("Platina")
    } else if (quantidadeXP <= 8.001 && quantidadeXP <= 9.000) {
        console.log("Ascendente")
    } else if (quantidadeXP <= 9.001 && quantidadeXP <= 10.000) {
        console.log("Imortal") 
    } else {
        console.log("Radiante")
    }
}

classificarHeroi("Batman", 1000)


// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
