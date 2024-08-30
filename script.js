function insert(num) {
    var visor = document.getElementById('visor');
    visor.value = visor.value + num;
}

function clean() {
    document.getElementById('visor').value = "";
}

function back() {
    var visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1); // Corrigido para remover o último caractere
}

function calcular() {
    var visor = document.getElementById('visor');
    try {
        visor.value = eval(visor.value); // Corrigido para calcular a expressão
    } catch (e) {
        visor.value = "Erro"; // Mensagem de erro caso a expressão seja inválida
    }
}
