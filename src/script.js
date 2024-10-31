niveis = {
  Novato: 0,
  Ferro: 1000,
  Bronze: 2000,
  Prata: 5000,
  Ouro: 7000,
  Platina: 8000,
  Ascendente: 9000,
  Imortal: 10000,
  Radiante: 10001,
};

  function mostraNivel(nivelXP){
    let nivel = "";

    // Itera chaves dos níveis buscando o primeiro valor que ultrapasse o XP do jogador
    Object.keys(niveis).forEach((k) => {
      if (nivelXP >= niveis[k]) {
        nivel = k;
      }
    });

    return nivel;
  }

  document
  .getElementById("formHeroi")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta de dados
    const nomeHeroi = document.getElementById("name").value; 
    const nivelXP = parseInt(document.getElementById("xp").value);

    nivel = mostraNivel(nivelXP)
    
    document.getElementById(
      "result"
    ).innerText = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`;
  });
