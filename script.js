const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('.botoes button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valorBotao = botao.textContent;

        if (valorBotao === 'C') {
            visor.value = '';
        } else if (valorBotao === '=') {
            try {
                visor.value = eval(visor.value);
            } catch {
                visor.value = 'Erro';
            }
        } else {
            visor.value += valorBotao;
        }
    });
});
