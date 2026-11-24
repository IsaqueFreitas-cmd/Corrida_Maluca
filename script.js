const carro1 = document.getElementById("carro1");
const carro2 = document.getElementById("carro2");
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");

const reiniciar = document.getElementById("reiniciar");
const mensagem = document.getElementById("mensagem");
const chegada = document.querySelector(".chegada");

let position1 = 0;
let position2 = 0;
let terminou = false;

function acelerar(jogador) {
    if (terminou) return;

    const pistaWidth = carro1.offsetParent.clientWidth;
    const limit = pistaWidth - (chegada.offsetLeft + chegada.);

    if (jogador === 1) {
        position1 = Math.min(position1 + 15, limit);
        carro1.style.right = `${position1}px`;

        if (position1 >= limit) {
            mensagem.textContent = "🏆 Player 01 WON!";
            terminou = true;
        }
    }

    if (jogador === 2) {
        position2 = Math.min(position2 + 15, limit);
        carro2.style.right = `${position2}px`;

        if (position2 >= limit) {
            mensagem.textContent = "🏆 Player 02 WON!";
            terminou = true;
        }
    }
}



botao1.addEventListener("click", function () { acelerar(1) });
botao2.addEventListener("click", function () { acelerar(2) });

document.addEventListener("keydown", function (evento) {
    if (evento.repeat) return;

    const tecla = evento.key.toLowerCase();

    if (tecla === "a") {
        acelerar(1);
    }

    if (tecla === "l") {
        acelerar(2);
    }
})

reiniciar.addEventListener("click", function () {
    position1 = 0;
    position2 = 0;
    terminou = false;

    carro1.style.right = "0px"
    carro2.style.right = "0px"

    mensagem.textContent = "Prepare, point, GO!"
});