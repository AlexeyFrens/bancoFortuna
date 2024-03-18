$(document).ready(function () {
    $(".enviar").click(function () {
        var valorDep = $("#valorDep").val();
        var conta = $("#conta").val();
        var senha = $("#senha").val();

        if (valorDep === '' || conta === '' || senha === '') {
            alert("Preencha todos os campos")
        } else {
            if (senha === '123456') {
                window.location.href = "../index.html";
                alert("Depósito de R$" + valorDep + " reais para a conta " + conta + " realizada com sucesso");
            } else {
                alert("Senha incorreta :(")
            }
        }
    });
});