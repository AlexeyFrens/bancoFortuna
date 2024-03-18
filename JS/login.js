
$(document).ready(function () {
    $(".buttonForm").click(function () {
        var usuario = $('#usuario').val();
        var senha = $('#senha').val();

        if (usuario === '' || senha === '') {
            alert("Preencha todos os campos");
        } else {
            if (usuario === 'alexey123' && senha === '123456') {
                window.location.href = "../index.html";
            } else {
                alert("Usuário ou senha incorretos");
            }
        }

    });
});