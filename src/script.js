document
  .getElementById("formHeroi")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const nomeHeroi = document.getElementById("name").value; // coletar nome
    const nivelXP = parseInt(document.getElementById("xp").value); // Coleta XP
    let nivel = ""

    // Classificação do Nível
    if (nivelXP <= 1000) {
      nivel = "Ferro"
    } else if (nivelXP <= 1.001 && nivelXP <= 2000) {
      nivel = "Bronze"
    } else if (nivelXP <= 2001 && nivelXP <= 5.000) {
      nivel = "Prata"
    } else if (nivelXP <= 5.001 && nivelXP <= 7.000) {
      nivel = "Ouro"
    } else if (nivelXP <= 7.001 && nivelXP <= 8.000) {
      nivel = "Platina"
    } else if (nivelXP <= 8.001 && nivelXP <= 9.000) {
      nivel = "Ascendente"
    } else if (nivelXP <= 9.001 && nivelXP <= 10.000) {
      nivel = "Imortal"
    } else if (nivelXP >= 10001) {
      nivel = "Radiante"
    } else {
        nivel = "Não foi possível calcular o nível do herói"
    }

    document.getElementById(
      "result"
    ).innerText = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`  
})


