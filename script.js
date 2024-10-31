function verificarPoliedro() {
    const vertices = parseInt(document.getElementById('vertices').value);
    const arestas = parseInt(document.getElementById('arestas').value);
    const faces = parseInt(document.getElementById('faces').value);

    const resultado = vertices - arestas + faces;

    if (resultado === 2) {
        document.getElementById('resultado').innerText = "O poliedro é euleriano!";
        document.getElementById('resultado').style.color = "green";
    } else {
        document.getElementById('resultado').innerText = "O poliedro não é euleriano.";
        document.getElementById('resultado').style.color = "red";
    }
}