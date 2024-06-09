document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteio').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numMaximo = document.getElementById('numero-maximo').value;
        numMaximo = parseInt(numMaximo);

        let numAleatorio = Math.random() * numMaximo;
        
        document.getElementById('resultado-valor').innerHTML = Math.floor(numAleatorio + 1);
        document.querySelector('.resultado').style.display = 'block';
    })
})