const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const btnIngresar = document.getElementById("btnIngresar");
const mensaje = document.getElementById("mensaje");

function crearOpciones() {
    for (let i = 1; i <= 9; i++) {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
        option1.value = i;
        option1.textContent = i;
        option2.value = i;
        option2.textContent = i;
        option3.value = i;
        option3.textContent = i;
        select1.appendChild(option1);
        select2.appendChild(option2);
        select3.appendChild(option3);
    }
}

function verificarPassword() {
    const password = `${select1.value}${select2.value}${select3.value}`;

    if (password === "911") {
        mensaje.textContent = "password 1 correcto";
    } else if (password === "714") {
        mensaje.textContent = "password 2 correcto";
    } else {
        mensaje.textContent = "password incorrecto";
    }
}

crearOpciones();
btnIngresar.addEventListener("click", verificarPassword);
