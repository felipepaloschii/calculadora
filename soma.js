function soma() {
    const numero = document.getElementById("numero").value;
    const numero2 = document.getElementById("numero2").value;

    if ((numero == "") && (numero2 == "")) {
        alert("Os dois campos estão vazios, não é possível realizar a conta")
    } else if (numero == "") {
        alert("Um dos campos está vazio, não é possível realizar a conta")
    }else if (numero2 == "") {
        alert("Um dos campos está vazio, não é possível realizar a conta")
    }else{

        let soma = Number(numero) + Number(numero2);
        
        alert("A soma desses números é igual: " + soma);
    }
}