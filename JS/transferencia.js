
$(document).ready(function () {
    $(".enviar").click(function () {
        var valorTransf = $("#valorTransf").val();
        var conta = $("#destinatario").val();
        var senha = $("#senha").val();

        if (valorTransf === '' || conta === '' || senha === '') {
            alert("Preencha todos os campos")
        } else {
            if (senha === '123456') {
                window.location.href = "../index.html";
                alert("Tranferência de R$" + valorTransf + " reais para a conta " + conta + " realizada com sucesso");
            } else {
                alert("Senha incorreta :(")
            }
        }
    });
});