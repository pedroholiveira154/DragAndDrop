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
const informacoesElementos = document.getElementById("informacoesElementos");

// Elementos que o jogador já descobriu (começa com os 4 clássicos)
const descobertos = new Set(ELEMENTOS_INICIAIS);

// Elementos que existem
const totalElementos = Object.keys(ELEMENTOS).length;

// Elementos que aparecem como ingrediente em pelo menos uma receita.
// Quem não estiver aqui é um "beco sem saída" — não gera mais nada.
const ELEMENTOS_COMBINAVEIS = new Set();
Object.keys(RECEITAS).forEach(chave => {
    const [idA, idB] = chave.split('+');
    ELEMENTOS_COMBINAVEIS.add(idA);
    ELEMENTOS_COMBINAVEIS.add(idB);
});

atualizarContador();

// Cria a "ficha" visual de um elemento (usada tanto na área de elementos
// descobertos quanto dentro dos encaixes de combinação e no resultado)
function criarFicha(idElemento) {
    const dados = ELEMENTOS[idElemento];
    const ficha = document.createElement('div');
    ficha.className = `ficha-elemento categoria-${dados.categoria}`;

    if (!ELEMENTOS_COMBINAVEIS.has(idElemento)) {
        ficha.classList.add('sem-combinacoes');
    }

    ficha.dataset.idElemento = idElemento;
    ficha.draggable = true;
    ficha.title = ELEMENTOS_COMBINAVEIS.has(idElemento)
        ? dados.nome
        : `${dados.nome} (sem mais combinações)`;
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
    contadorDescobertos.textContent = `${descobertos.size} elementos descobertos de ${totalElementos}`;
    console.log(ELEMENTOS)
    console.log(ELEMENTOS.lenght)
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

function infoElementos() {
    Swal.fire({
        title: 'Cores do fundo',
        html: `
    <div style="text-align: left;">

      <div style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
        <div style="width: 30px; height: 30px; background: #d7f0d0; border-radius: 4px;"></div>
        <span>Representa Vida</span>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
        <div style="width: 30px; height: 30px; background: #cfe8f7; border-radius: 4px;"></div>
        <span>Representa Natureza</span>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
        <div style="width: 30px; height: 30px; background: #ece0cf; border-radius: 4px;"></div>
        <span>Representa Material</span>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
        <div style="width: 30px; height: 30px; background: #f7d9cf; border-radius: 4px;"></div>
        <span>Representa Civilização</span>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
        <div style="width: 30px; height: 30px; background: #e4d6f7; border-radius: 4px;"></div>
        <span>Não há mais combinações</span>
      </div>

    </div>
  `,
        confirmButtonText: 'Fechar'
    });
}

renderizarElementos();
