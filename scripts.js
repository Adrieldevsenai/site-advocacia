document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Obrigado por entrar em contato, ${name}. Em breve retornaremos!`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
