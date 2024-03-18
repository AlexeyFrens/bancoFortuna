

$(document).ready(function () {
    $(".buttonForm").click(function () {
        var nome = $("#nome").val();
        var cpf = $("#cpf").val();
        var usuario = $("#usuario").val();
        var senha = $("#senha").val();
        var Confsenha = $("#Confsenha").val();

        if(nome === '' || cpf === '' || usuario === '' || senha === '' || Confsenha === ''){
            alert("Preencha todos os campos");
        }else{
           window.location.href = "../index.html";
            alert("Cadastro Realizado com sucesso"); 
        }
        
    });
});