const contador1 = document.getElementById("contador1");
const contador2 = document.getElementById("contador2");
const contador3 = document.getElementById("contador3");
const resultado = document.getElementById("resultado");

function actualizarResultado() {
    const valores = [contador1, contador2, contador3].map(input => {
        const valor = parseInt(input.value, 10);
        return Number.isNaN(valor) ? 0 : valor;
    });

    const total = valores.reduce((sum, value) => sum + value, 0);

    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = "Llevas demasiados stickers";
    }
}

const btnTotal = document.getElementById("btnTotal");
const totalFooter = document.getElementById("totalFooter");

[contador1, contador2, contador3].forEach(input => {
    input.addEventListener("input", actualizarResultado);
});

function mostrarTotal() {
    const valores = [contador1, contador2, contador3].map(input => {
        const valor = parseInt(input.value, 10);
        return Number.isNaN(valor) ? 0 : valor;
    });

    const total = valores.reduce((sum, value) => sum + value, 0);
    actualizarResultado();
    totalFooter.textContent = `Sumatoria total indicada: ${total}`;
}

btnTotal.addEventListener("click", mostrarTotal);
actualizarResultado();
