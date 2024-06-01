let numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
let tentativas = 0;
let palpitesRepetidos = [];
let tamanhoDaPalavra = palpitesRepetidos.length;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado();

    if (!palpiteDigitado) {
        alert("Digite um valor válido!");
        return;
    } else if (palpiteDigitado <= 0 || palpiteDigitado > 100) {
        alert("Por favor, digite um número entre 1 e 100.");
        return;
    }
    
    if (palpitesRepetidos.includes(palpiteDigitado)) {
          alert("Você já tentou esse número. Tente novamente! Com um número diferente!");
          return;
    }
    
    palpitesRepetidos[tamanhoDaPalavra] = palpiteDigitado;

    if (palpiteDigitado === numeroAleatorio) {
        alert("Parabéns, você adivinhou o número!");
        reiniciarJogo();
        return;
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("O número é muito alto. Tente novamente.");
    } else {
        tentativas++;
        atualizarFeedback("O número é muito baixo. Tente novamente!");
        console.log(tentativas);
    }

    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos!") {
        alert("Você perdeu!");
        reiniciarJogo();
    }

}

function reiniciarJogo() { 
    const vaiReiniciar = confirm("Deseja jogar novamente?");
    console.log(vaiReiniciar);

    if (vaiReiniciar) { 
        tentativas = 0;
        palpitesRepetidos = [];
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback("");
        limparPalpiteDigitado();
    }
}