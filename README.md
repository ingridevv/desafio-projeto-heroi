# Desafio - Classificação de Nível do Herói

**Desafio Proposto**: Utilizar variáveis para armazenar o nome e quantidade de experiência (XP) de um herói, e com uma estrutura de decisão 
classificar o heróis nos seguintes níveis: Ferro, Bronze, Prata, Ouro, Platina, Ascendente, Imortal e Radiante. 

Este desafio apresenta uma aplicação prática dos conhecimentos sobre lógica de programação e pensamento computacional obtidos no módulo de "Estruturas de Controle" do Bootmcamp GFT Start #6 da Digital Innovation One em parceria com a GFT.

[Vídeo de Apresentação](desafio-heroi-video.mp4)

### Linguagens e Bibliotecas utilizadas: HTML, CSS, TailwindCSS e JavaScript.

## Melhorias - Refatoração 

Durante o desenvlvimento do código, optei por aperfeiçoar a estrutura de decisão, ao invés de utilizar uma abordagem comum com if's e else's. Amplifiquei o desafio
ao incorporar uma estrutura de repetição por meio do uso do método Object.keys do JavaScript, que possibilita gestão eficiente dos dados.

```javascript
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
}
```

## O que aprendi neste desafio?
A construção do código para este desafio consolidou conhecimentos fundamentais sobre a lógica de programação e a aplicação prática desses conceitos. 
Além de desenvolver uma estrutura de código simples para atender aos requisitos do desafio, foi implementada uma interface básica que facilitou a interação do usuário. 
Também foi realizada a refatoração do código, com melhorias na estrutura de decisão e com boas práticas.



