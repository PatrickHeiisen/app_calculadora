/**
 * Atividade Botão do Panico
 * @author Patrick G 
 */
function gerarTabuada() {
    var numero = document.getElementById("numero").value;
    var resultadoDiv = document.getElementById("resultado");
    var erroDiv = document.getElementById("erro");

    // Limpar qualquer mensagem de erro
    erroDiv.textContent = "";

    // Verificar se o número foi inserido
    if (numero === "" || numero == null) {
        erroDiv.textContent = "Por favor, insira um número para gerar a tabuada.";
        resultadoDiv.innerHTML = "";  // Limpar o resultado
    } else {
        var tabuada = "";
        for (var i = 1; i <= 10; i++) {
            tabuada += numero + " x " + i + " = " + (numero * i) + "<br>";
        }
        resultadoDiv.innerHTML = tabuada;
    }
}

function limparResultado() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("erro").textContent = "";  // Limpar mensagem de erro
}

