// script.js
// -----------------------------------------------------------------------
// Lógica principal do jogo: renderiza a área de elementos descobertos,
// controla os encaixes de combinação e consulta data.js para saber o
// resultado (ou não) de cada combinação.
// -----------------------------------------------------------------------

const areaElementos = document.getElementById('areaElementos');
const encaixe1 = document.getElementById('encaixe1');
const encaixe2 = document.getElementById('encaixe2');
const encaixeResultado = document.getElementById('encaixeResultado');
const sinalIgual = document.getElementById('sinalIgual');
const aviso = document.getElementById('aviso');
const contadorDescobertos = document.getElementById('contadorDescobertos');

// Elementos que o jogador já descobriu (começa com os 4 clássicos)
const descobertos = new Set(ELEMENTOS_INICIAIS);

atualizarContador();

// Cria a "ficha" visual de um elemento (usada tanto na área de elementos
// descobertos quanto dentro dos encaixes de combinação e no resultado)
function criarFicha(idElemento) {
    const dados = ELEMENTOS[idElemento];
    const ficha = document.createElement('div');
    ficha.className = `ficha-elemento categoria-${dados.categoria}`;
    ficha.dataset.idElemento = idElemento;
    ficha.draggable = true;
    ficha.title = dados.nome;
    ficha.addEventListener('dragstart', arrastar);

    const icone = document.createElement('img');
    icone.className = 'icone';
    icone.src = dados.imagem;
    icone.alt = dados.nome;

    const rotulo = document.createElement('span');
    rotulo.className = 'rotulo';
    rotulo.textContent = dados.nome;

    ficha.append(icone, rotulo);
    return ficha;
}

function renderizarElementos(idDestaque) {
    areaElementos.innerHTML = '';
    descobertos.forEach(id => {
        const ficha = criarFicha(id);
        if (id === idDestaque) ficha.classList.add('ficha-nova');
        areaElementos.appendChild(ficha);
    });
}

function colocarElementoEm(alvo, idElemento) {
    alvo.innerHTML = '';
    alvo.appendChild(criarFicha(idElemento));
    alvo.classList.add('preenchido');
}

function limparEncaixes() {
    encaixe1.innerHTML = '';
    encaixe2.innerHTML = '';
    encaixe1.classList.remove('preenchido');
    encaixe2.classList.remove('preenchido');
}

function atualizarContador() {
    contadorDescobertos.textContent = `${descobertos.size} elementos descobertos`;
}

function mostrarAviso(mensagem, tipo = 'info') {
    aviso.textContent = mensagem;
    aviso.className = `aviso aviso-${tipo}`;
    aviso.hidden = false;
    clearTimeout(mostrarAviso._temporizador);
    mostrarAviso._temporizador = setTimeout(() => { aviso.hidden = true; }, 2200);
}

function verificarCombinacao() {
    const idA = encaixe1.firstElementChild?.dataset.idElemento;
    const idB = encaixe2.firstElementChild?.dataset.idElemento;
    if (!idA || !idB) return; // ainda falta um dos dois

    const idResultado = buscarReceita(idA, idB);

    if (!idResultado) {
        mostrarAviso(`${ELEMENTOS[idA].nome} + ${ELEMENTOS[idB].nome} não combinam.`, 'erro');
        setTimeout(limparEncaixes, 900);
        return;
    }

    const ehNovo = !descobertos.has(idResultado);
    descobertos.add(idResultado);

    encaixeResultado.hidden = false;
    sinalIgual.hidden = false;
    encaixeResultado.innerHTML = '';
    encaixeResultado.appendChild(criarFicha(idResultado));
    encaixeResultado.classList.add('pop');
    setTimeout(() => encaixeResultado.classList.remove('pop'), 400);

    if (ehNovo) {
        mostrarAviso(`Novo elemento descoberto: ${ELEMENTOS[idResultado].nome}!`, 'sucesso');
        renderizarElementos(idResultado);
        atualizarContador();
    } else {
        mostrarAviso(`${ELEMENTOS[idA].nome} + ${ELEMENTOS[idB].nome} = ${ELEMENTOS[idResultado].nome}`, 'info');
    }

    setTimeout(limparEncaixes, 900);
}

renderizarElementos();
