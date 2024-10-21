const pass = 'Prowler-o-melhor';
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formPassword = document.querySelector('#password').value;

    if (pass === formPassword) {
        window.location.href = 'dados.html';
    } else {
        alert('Você precisa de uma permissão para acessar a página')
        document.querySelector('#password').focus();
    }

})

document.getElementById("button-sign").addEventListener("click", function () {
    alert("Contrato assinado!");
});