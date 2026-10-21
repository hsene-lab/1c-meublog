script>
        const botoes = document.querySelectorAll("button");

        botoes.forEach(function (botao) {
            let curtiu = false;
            botao.addEventListener("click", function botaoClicado) 
                function botaoClicado() {
                let texto = botao.querySelector("span");
                if (curtiu === false) {
                  texto.textContent++;
                  curtiu = true; 
                } else{
                    texto.textContent--;
                    curtiu = false;
                }
            }
        })
    </script>
    const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
    btnTemaEscuro.addEventListener("click",mudaTema);
    fuction mudaTema (){
        const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}
    