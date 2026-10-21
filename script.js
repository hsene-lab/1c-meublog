
const botoesReacao = document.querySelectorAll(".reacoes button");

botoesReacao.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        if (texto) {
            if (!curtiu) {
                texto.textContent++;
                curtiu = true; 
            } else {
                texto.textContent--;
                curtiu = false;
            }
        }
    });
});


const btnTemaEscuro = document.querySelector(".btn-tema, .btn-tema-escuro");

if (btnTemaEscuro) {
    btnTemaEscuro.addEventListener("click", mudaTema);
}

function mudaTema() {
    document.body.classList.toggle("tema-escuro");
}


const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

if (btnVoltarTopo) {
    btnVoltarTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}