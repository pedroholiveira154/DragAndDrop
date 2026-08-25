// data.js
// -----------------------------------------------------------------------
// Aqui ficam TODOS os elementos do jogo e as receitas (combinações) entre
// eles. É este arquivo que você edita para o jogo crescer.
//
// Como adicionar um elemento novo:
//   1) Crie uma entrada em ELEMENTOS com um id único (sem espaço/acento),
//      o nome que aparece pro jogador, um emoji e uma categoria
//      ("natureza", "material", "vida" ou "civilizacao" — só define a
//      cor da ficha).
//   2) Chame adicionarReceita("idA", "idB", "idDoResultado") uma ou mais
//      vezes. A ordem de idA/idB não importa (fogo+água = água+fogo).
// O jogo detecta sozinho que o elemento é novo e libera ele na área de
// elementos descobertos.
// -----------------------------------------------------------------------

const ELEMENTOS = {
    // Elementos clássicos (ponto de partida)
    fogo:  { nome: "Fogo",  emoji: "🔥", categoria: "natureza" },
    agua:  { nome: "Água",  emoji: "💧", categoria: "natureza" },
    terra: { nome: "Terra", emoji: "🌎", categoria: "natureza" },
    ar:    { nome: "Ar",    emoji: "💨", categoria: "natureza" },

    // Natureza
    vapor:    { nome: "Vapor",    emoji: "♨️",  categoria: "natureza" },
    lava:     { nome: "Lava",     emoji: "🌋", categoria: "natureza" },
    energia:  { nome: "Energia",  emoji: "⚡", categoria: "natureza" },
    lama:     { nome: "Lama",     emoji: "🟫", categoria: "natureza" },
    chuva:    { nome: "Chuva",    emoji: "🌧️", categoria: "natureza" },
    poeira:   { nome: "Poeira",   emoji: "🌫️", categoria: "natureza" },
    oceano:   { nome: "Oceano",   emoji: "🌊", categoria: "natureza" },
    sol:      { nome: "Sol",      emoji: "☀️",  categoria: "natureza" },
    montanha: { nome: "Montanha", emoji: "⛰️", categoria: "natureza" },
    vento:    { nome: "Vento",    emoji: "🌬️", categoria: "natureza" },
    nuvem:    { nome: "Nuvem",    emoji: "☁️",  categoria: "natureza" },
    pantano:  { nome: "Pântano",  emoji: "🐸", categoria: "natureza" },
    estrela:  { nome: "Estrela",  emoji: "⭐", categoria: "natureza" },

    // Materiais
    pedra:  { nome: "Pedra",   emoji: "🪨", categoria: "material" },
    areia:  { nome: "Areia",   emoji: "🏖️", categoria: "material" },
    vidro:  { nome: "Vidro",   emoji: "🪟", categoria: "material" },
    metal:  { nome: "Metal",   emoji: "⚙️",  categoria: "material" },
    tijolo: { nome: "Tijolo",  emoji: "🧱", categoria: "material" },
    argila: { nome: "Argila",  emoji: "🏺", categoria: "material" },
    sal:    { nome: "Sal",     emoji: "🧂", categoria: "material" },
    madeira:{ nome: "Madeira", emoji: "🪵", categoria: "material" },

    // Vida
    vida:    { nome: "Vida",    emoji: "🌱", categoria: "vida" },
    planta:  { nome: "Planta",  emoji: "🌿", categoria: "vida" },
    arvore:  { nome: "Árvore",  emoji: "🌳", categoria: "vida" },
    flor:    { nome: "Flor",    emoji: "🌸", categoria: "vida" },
    fruta:   { nome: "Fruta",   emoji: "🍎", categoria: "vida" },
    peixe:   { nome: "Peixe",   emoji: "🐟", categoria: "vida" },
    passaro: { nome: "Pássaro", emoji: "🐦", categoria: "vida" },
    reptil:  { nome: "Réptil",  emoji: "🦎", categoria: "vida" },
    humano:  { nome: "Humano",  emoji: "🧍", categoria: "vida" },
    trigo:   { nome: "Trigo",   emoji: "🌾", categoria: "vida" },

    // Civilização
    casa:         { nome: "Casa",         emoji: "🏠", categoria: "civilizacao" },
    ferramenta:   { nome: "Ferramenta",   emoji: "🔨", categoria: "civilizacao" },
    barco:        { nome: "Barco",        emoji: "⛵", categoria: "civilizacao" },
    papel:        { nome: "Papel",        emoji: "📄", categoria: "civilizacao" },
    livro:        { nome: "Livro",        emoji: "📖", categoria: "civilizacao" },
    roda:         { nome: "Roda",         emoji: "🛞", categoria: "civilizacao" },
    carro:        { nome: "Carro",        emoji: "🚗", categoria: "civilizacao" },
    eletricidade: { nome: "Eletricidade", emoji: "💡", categoria: "civilizacao" },
    robo:         { nome: "Robô",         emoji: "🤖", categoria: "civilizacao" },
    computador:   { nome: "Computador",   emoji: "💻", categoria: "civilizacao" },
    musica:       { nome: "Música",       emoji: "🎵", categoria: "civilizacao" },
    cerveja:      { nome: "Cerveja",      emoji: "🍺", categoria: "civilizacao" },
    cidade:       { nome: "Cidade",       emoji: "🏙️", categoria: "civilizacao" },
};

// Elementos que já começam liberados quando o jogo abre
const ELEMENTOS_INICIAIS = ["fogo", "agua", "terra", "ar"];

function chaveCombinacao(a, b) {
    return [a, b].sort().join("+");
}

const RECEITAS = {};
function adicionarReceita(a, b, resultado) {
    RECEITAS[chaveCombinacao(a, b)] = resultado;
}

function buscarReceita(idA, idB) {
    return RECEITAS[chaveCombinacao(idA, idB)] || null;
}

// --- Receitas -----------------------------------------------------------

// Nível 1: combinações diretas dos 4 elementos clássicos
adicionarReceita("fogo", "agua", "vapor");
adicionarReceita("fogo", "terra", "lava");
adicionarReceita("fogo", "ar", "energia");
adicionarReceita("agua", "terra", "lama");
adicionarReceita("agua", "ar", "chuva");
adicionarReceita("terra", "ar", "poeira");
adicionarReceita("agua", "agua", "oceano");
adicionarReceita("fogo", "fogo", "sol");
adicionarReceita("terra", "terra", "montanha");
adicionarReceita("ar", "ar", "vento");

// Nível 2: materiais e paisagens
adicionarReceita("lava", "agua", "pedra");
adicionarReceita("pedra", "ar", "areia");
adicionarReceita("areia", "fogo", "vidro");
adicionarReceita("pedra", "fogo", "metal");
adicionarReceita("lama", "fogo", "tijolo");
adicionarReceita("lama", "sol", "argila");
adicionarReceita("vapor", "ar", "nuvem");
adicionarReceita("chuva", "terra", "pantano");
adicionarReceita("oceano", "sol", "sal");
adicionarReceita("sol", "energia", "estrela");

// Nível 3: vida
adicionarReceita("pantano", "energia", "vida");
adicionarReceita("vida", "terra", "planta");
adicionarReceita("planta", "terra", "arvore");
adicionarReceita("planta", "sol", "flor");
adicionarReceita("arvore", "sol", "fruta");
adicionarReceita("vida", "agua", "peixe");
adicionarReceita("vida", "ar", "passaro");
adicionarReceita("vida", "pedra", "reptil");
adicionarReceita("vida", "argila", "humano");

// Nível 4: civilização
adicionarReceita("arvore", "pedra", "madeira");
adicionarReceita("humano", "tijolo", "casa");
adicionarReceita("humano", "metal", "ferramenta");
adicionarReceita("humano", "planta", "trigo");
adicionarReceita("madeira", "agua", "barco");
adicionarReceita("madeira", "madeira", "papel");
adicionarReceita("papel", "humano", "livro");
adicionarReceita("pedra", "ferramenta", "roda");
adicionarReceita("roda", "metal", "carro");
adicionarReceita("energia", "metal", "eletricidade");
adicionarReceita("eletricidade", "metal", "robo");
adicionarReceita("eletricidade", "ferramenta", "computador");
adicionarReceita("humano", "vento", "musica");
adicionarReceita("trigo", "agua", "cerveja");
adicionarReceita("casa", "humano", "cidade");
