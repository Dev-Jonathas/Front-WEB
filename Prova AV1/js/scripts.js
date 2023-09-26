document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validar o formulário antes de enviar
        if (validateForm()) {
            // Enviar o formulário (você pode adicionar sua lógica de envio aqui)
            alert("Formulário enviado com sucesso!"); // Exemplo de mensagem de sucesso
            form.reset(); // Limpa o formulário após o envio
        }
    });

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const specialty = document.getElementById("specialty").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !date || !time || !specialty || !message) {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        // Adicione outras validações conforme necessário

        return true;
    }
});
