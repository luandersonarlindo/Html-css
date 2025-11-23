document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('ilogin').value;
        const senha = document.getElementById('isenha').value;

        // Validação simples
        if (email && senha) {
            // Mensagem de sucesso
            alert('Login realizado com sucesso!\n\nBem-vindo(a) de volta!');

            // Opcional: limpar os campos
            form.reset();

            // Aqui você poderia redirecionar o usuário
            // window.location.href = 'dashboard.html';
        }
    });
});