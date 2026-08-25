// global.js
// -----------------------------------------------------------------------
// Funções genéricas de Arrastar e Soltar (Drag and Drop). Não conhecem as
// regras do jogo: só sabem pegar o id do elemento arrastado e colocar no
// lugar certo. A regra de "isso combina ou não" fica em script.js
// (verificarCombinacao).
// -----------------------------------------------------------------------

function arrastar(ev) {
    const idElemento = ev.currentTarget.dataset.idElemento;
    ev.dataTransfer.setData("text/plain", idElemento);
}

function permitirSoltar(ev) {
    ev.preventDefault();
}

function soltar(ev) {
    ev.preventDefault();
    const idElemento = ev.dataTransfer.getData("text/plain");
    if (!idElemento) return;

    colocarElementoEm(ev.currentTarget, idElemento);
    verificarCombinacao();
}
