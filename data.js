// data.js
// -----------------------------------------------------------------------
// Aqui ficam TODOS os elementos do jogo e as receitas (combinações) entre
// eles. É este arquivo que você edita para o jogo crescer.
//
// Como adicionar um elemento novo:
//   1) Crie uma entrada em ELEMENTOS com um id único (sem espaço/acento),
//      o nome que aparece pro jogador, um imagem e uma categoria
//      ("natureza", "material", "vida" ou "civilizacao" — só define a
//      cor da ficha).
//   2) Chame adicionarReceita("idA", "idB", "idDoResultado") uma ou mais
//      vezes. A ordem de idA/idB não importa (fogo+água = água+fogo).
// O jogo detecta sozinho que o elemento é novo e libera ele na área de
// elementos descobertos.
// -----------------------------------------------------------------------

const ELEMENTOS = {
    // Elementos clássicos (ponto de partida)
    fogo:  { nome: "Fogo",  imagem: "imagens/fogo.png", categoria: "natureza" },
    agua:  { nome: "Água",  imagem: "imagens/agua.png", categoria: "natureza" },
    terra: { nome: "Terra", imagem: "imagens/terra.png", categoria: "natureza" },
    ar:    { nome: "Ar",    imagem: "imagens/ar.png", categoria: "natureza" },

    // Natureza
    vapor:    { nome: "Vapor",    imagem: "imagens/vapor.png",  categoria: "natureza" },
    lava:     { nome: "Lava",     imagem: "imagens/lava.png", categoria: "natureza" },
    energia:  { nome: "Energia",  imagem: "imagens/energia.png", categoria: "natureza" },
    lama:     { nome: "Lama",     imagem: "imagens/lama.png", categoria: "natureza" },
    chuva:    { nome: "Chuva",    imagem: "imagens/chuva.png", categoria: "natureza" },
    poeira:   { nome: "Poeira",   imagem: "imagens/poeira.png", categoria: "natureza" },
    oceano:   { nome: "Oceano",   imagem: "imagens/oceano.png", categoria: "natureza" },
    sol:      { nome: "Sol",      imagem: "imagens/sol.png",  categoria: "natureza" },
    montanha: { nome: "Montanha", imagem: "imagens/montanha.png", categoria: "natureza" },
    vento:    { nome: "Vento",    imagem: "imagens/vento.png", categoria: "natureza" },
    nuvem:    { nome: "Nuvem",    imagem: "imagens/nuvem.png",  categoria: "natureza" },
    pantano:  { nome: "Pântano",  imagem: "imagens/pantano.png", categoria: "natureza" },
    estrela:  { nome: "Estrela",  imagem: "imagens/estrela.png", categoria: "natureza" },

    // Materiais
    pedra:  { nome: "Pedra",   imagem: "imagens/pedra.png", categoria: "material" },
    areia:  { nome: "Areia",   imagem: "imagens/areia.png", categoria: "material" },
    vidro:  { nome: "Vidro",   imagem: "imagens/vidro.png", categoria: "material" },
    metal:  { nome: "Metal",   imagem: "imagens/metal.png",  categoria: "material" },
    tijolo: { nome: "Tijolo",  imagem: "imagens/tijolo.png", categoria: "material" },
    argila: { nome: "Argila",  imagem: "imagens/argila.png", categoria: "material" },
    sal:    { nome: "Sal",     imagem: "imagens/sal.png", categoria: "material" },
    madeira:{ nome: "Madeira", imagem: "imagens/madeira.png", categoria: "material" },

    // Vida
    vida:    { nome: "Vida",    imagem: "imagens/vida.png", categoria: "vida" },
    planta:  { nome: "Planta",  imagem: "imagens/planta.png", categoria: "vida" },
    arvore:  { nome: "Árvore",  imagem: "imagens/arvore.png", categoria: "vida" },
    flor:    { nome: "Flor",    imagem: "imagens/flor.png", categoria: "vida" },
    fruta:   { nome: "Fruta",   imagem: "imagens/fruta.png", categoria: "vida" },
    peixe:   { nome: "Peixe",   imagem: "imagens/peixe.png", categoria: "vida" },
    passaro: { nome: "Pássaro", imagem: "imagens/passaro.png", categoria: "vida" },
    reptil:  { nome: "Réptil",  imagem: "imagens/reptil.png", categoria: "vida" },
    humano:  { nome: "Humano",  imagem: "imagens/humano.png", categoria: "vida" },
    trigo:   { nome: "Trigo",   imagem: "imagens/trigo.png", categoria: "vida" },

    // Civilização
    casa:         { nome: "Casa",         imagem: "imagens/.png", categoria: "civilizacao" },
    ferramenta:   { nome: "Ferramenta",   imagem: "imagens/.png", categoria: "civilizacao" },
    barco:        { nome: "Barco",        imagem: "imagens/.png", categoria: "civilizacao" },
    papel:        { nome: "Papel",        imagem: "imagens/.png", categoria: "civilizacao" },
    livro:        { nome: "Livro",        imagem: "imagens/.png", categoria: "civilizacao" },
    roda:         { nome: "Roda",         imagem: "imagens/.png", categoria: "civilizacao" },
    carro:        { nome: "Carro",        imagem: "imagens/.png", categoria: "civilizacao" },
    eletricidade: { nome: "Eletricidade", imagem: "imagens/.png", categoria: "civilizacao" },
    robo:         { nome: "Robô",         imagem: "imagens/.png", categoria: "civilizacao" },
    computador:   { nome: "Computador",   imagem: "imagens/.png", categoria: "civilizacao" },
    musica:       { nome: "Música",       imagem: "imagens/.png", categoria: "civilizacao" },
    cerveja:      { nome: "Cerveja",      imagem: "imagens/.png", categoria: "civilizacao" },
    cidade:       { nome: "Cidade",       imagem: "imagens/.png", categoria: "civilizacao" },
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
