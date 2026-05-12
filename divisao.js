function divisao() {
    const numero = document.getElementById("numero").value;
    const numero2 = document.getElementById("numero2").value;

    if ((numero == "") && (numero2 == "")) {
        alert("Os dois campos estão vazios, não é possível realizar a conta")
    } else if (numero == "") {
        alert("Um dos campos está vazio, não é possível realizar a conta")
    } else if (numero2 == "") {
        alert("Um dos campos está vazio, não é possível realizar a conta")
        } else if (numero == 0) {
        alert("Não é possível realizar a divisão com 0")
    } else if (numero2 == 0) {
        alert("Não é possível realizar a divisão com 0")
    } else {
        let divisao = Number(numero) / Number(numero2);

        alert("A divisão desses números é igual: " + divisao);
    }
}