document.getElementById("form-contato").addEventListener("submit", function(envio) {
    envio.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let assunto = "Mensagem através do portfólio."
    let texto = "Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem

    let link = "https://mail.google.com/mail/?view=cm&fs=1&to=leticiaalvesx7@gmail.com&su=" +
    encodeURIComponent(assunto) +
    "&body=" + encodeURIComponent(texto);

    window.location.href = link;
});