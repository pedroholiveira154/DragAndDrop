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
    fogo:  { nome: "Fogo",  imagem: "imagens/fogo.png",  categoria: "natureza" },
    agua:  { nome: "Água",  imagem: "imagens/agua.png",  categoria: "natureza" },
    terra: { nome: "Terra", imagem: "imagens/terra.png", categoria: "natureza" },
    ar:    { nome: "Ar",    imagem: "imagens/ar.png",    categoria: "natureza" },

    // Natureza
    vapor:      { nome: "Vapor",      imagem: "imagens/vapor.png",      categoria: "natureza" },
    lava:       { nome: "Lava",       imagem: "imagens/lava.png",       categoria: "natureza" },
    energia:    { nome: "Energia",    imagem: "imagens/energia.png",    categoria: "natureza" },
    lama:       { nome: "Lama",       imagem: "imagens/lama.png",       categoria: "natureza" },
    chuva:      { nome: "Chuva",      imagem: "imagens/chuva.png",      categoria: "natureza" },
    poeira:     { nome: "Poeira",     imagem: "imagens/poeira.png",     categoria: "natureza" },
    oceano:     { nome: "Oceano",     imagem: "imagens/oceano.png",     categoria: "natureza" },
    sol:        { nome: "Sol",        imagem: "imagens/sol.png",        categoria: "natureza" },
    montanha:   { nome: "Montanha",   imagem: "imagens/montanha.png",   categoria: "natureza" },
    vento:      { nome: "Vento",      imagem: "imagens/vento.png",      categoria: "natureza" },
    nuvem:      { nome: "Nuvem",      imagem: "imagens/nuvem.png",      categoria: "natureza" },
    pantano:    { nome: "Pântano",    imagem: "imagens/pantano.png",    categoria: "natureza" },
    estrela:    { nome: "Estrela",    imagem: "imagens/estrela.png",    categoria: "natureza" },
    arcoiris:   { nome: "Arco-Íris",  imagem: "imagens/arcoiris.png",   categoria: "natureza"},
    onda:       { nome: "Onda",       imagem: "imagens/onda.png",       categoria: "natureza"},
    tempestade: { nome: "Tempestade", imagem: "imagens/tempestade.png", categoria: "natureza"},
    raio:       { nome: "Raio",       imagem: "imagens/raio.png",       categoria: "natureza"},
    vale:       { nome: "vale",       imagem: "imagens/vale.png",       categoria: "natureza"},
    rio:        { nome: "Rio",        imagem: "imagens/rio.png",        categoria: "natureza"},
    neve:       { nome: "Neve",       imagem: "imagens/neve.png",       categoria: "natureza"},
    gelo:       { nome: "Gelo",       imagem: "imagens/gelo.png",       categoria: "natureza"},
    geleira:    { nome: "Geleira",    imagem: "imagens/geleira.png",    categoria: "natureza"},
    praia:      { nome: "Praia",      imagem: "imagens/praia.png",      categoria: "natureza"},
    calor:      { nome: "Calor",      imagem: "imagens/calor.png",      categoria: "natureza"},

    // Materiais
    pedra:  { nome: "Pedra",   imagem: "imagens/pedra.png",   categoria: "material" },
    areia:  { nome: "Areia",   imagem: "imagens/areia.png",   categoria: "material" },
    vidro:  { nome: "Vidro",   imagem: "imagens/vidro.png",   categoria: "material" },
    metal:  { nome: "Metal",   imagem: "imagens/metal.png",   categoria: "material" },
    tijolo: { nome: "Tijolo",  imagem: "imagens/tijolo.png",  categoria: "material" },
    argila: { nome: "Argila",  imagem: "imagens/argila.png",  categoria: "material" },
    sal:    { nome: "Sal",     imagem: "imagens/sal.png",     categoria: "material" },
    madeira:{ nome: "Madeira", imagem: "imagens/madeira.png", categoria: "material" },
     
    // Vida
    vida:         { nome: "Vida",         imagem: "imagens/vida.png",         categoria: "vida" },
    planta:       { nome: "Planta",       imagem: "imagens/planta.png",       categoria: "vida" },
    arvore:       { nome: "Árvore",       imagem: "imagens/arvore.png",       categoria: "vida" },
    flor:         { nome: "Flor",         imagem: "imagens/flor.png",         categoria: "vida" },
    fruta:        { nome: "Fruta",        imagem: "imagens/fruta.png",        categoria: "vida" },
    peixe:        { nome: "Peixe",        imagem: "imagens/peixe.png",        categoria: "vida" },
    passaro:      { nome: "Pássaro",      imagem: "imagens/passaro.png",      categoria: "vida" },
    reptil:       { nome: "Réptil",       imagem: "imagens/reptil.png",       categoria: "vida" },
    humano:       { nome: "Humano",       imagem: "imagens/humano.png",       categoria: "vida" },
    trigo:        { nome: "Trigo",        imagem: "imagens/trigo.png",        categoria: "vida" },
    alga:         { nome: "Alga",         imagem: "imagens/alga.png",         categoria: "vida"},
    coral:        { nome: "Coral",        imagem: "imagens/coral.png",        categoria: "vida"},
    mel:          { nome: "Mel",          imagem: "imagens/mel.png",          categoria: "vida"},
    semente:      { nome: "Semente",      imagem: "imagens/semente.png",      categoria: "vida"},
    tubarao:      { nome: "Tubarao",      imagem: "imagens/tubarao.png",      categoria: "vida"},
    ave:          { nome: "Ave",          imagem: "imagens/ave.png",          categoria: "vida"},
    dinossauro:   { nome: "Dinossauro",   imagem: "imagens/dinossauro.png",   categoria: "vida"},
    domesticacao: { nome: "Domesticacao", imagem: "imagens/domesticacao.png", categoria: "vida"},
    abelha:       { nome: "Abelha",       imagem: "abelha.png",               categoria: "vida"},
    animal:       { nome: "Animal",       imagem: "animal.png",               categoria: "vida"},
    floresta:     { nome: "Floresta",     imagem: "floresta.png",             categoria: "vida"},

    // Civilização
    casa:         { nome: "Casa",         imagem: "imagens/casa.png",         categoria: "civilizacao" },
    ferramenta:   { nome: "Ferramenta",   imagem: "imagens/ferramenta.png",   categoria: "civilizacao" },
    barco:        { nome: "Barco",        imagem: "imagens/barco.png",        categoria: "civilizacao" },
    papel:        { nome: "Papel",        imagem: "imagens/papel.png",        categoria: "civilizacao" },
    livro:        { nome: "Livro",        imagem: "imagens/livro.png",        categoria: "civilizacao" },
    roda:         { nome: "Roda",         imagem: "imagens/roda.png",         categoria: "civilizacao" },
    carro:        { nome: "Carro",        imagem: "imagens/carro.png",        categoria: "civilizacao" },
    eletricidade: { nome: "Eletricidade", imagem: "imagens/eletricidade.png", categoria: "civilizacao" },
    robo:         { nome: "Robô",         imagem: "imagens/robo.png",         categoria: "civilizacao" },
    computador:   { nome: "Computador",   imagem: "imagens/computador.png",   categoria: "civilizacao" },
    musica:       { nome: "Música",       imagem: "imagens/musica.png",       categoria: "civilizacao" },
    cerveja:      { nome: "Cerveja",      imagem: "imagens/cerveja.png",      categoria: "civilizacao" },
    cidade:       { nome: "Cidade",       imagem: "imagens/cidade.png",       categoria: "civilizacao" },
    vila:         { nome: "Vila",         imagem: "imagens/vila.png",         categoria: "civilizacao" },
    industria:    { nome: "Indústria",    imagem: "imagens/industria.png",    categoria: "civilizacao" },
    tecnologia:   { nome: "Tecnologia",   imagem: "imagens/tecnologia.png",   categoria: "civilizacao" },
    ia:           { nome: "IA",           imagem: "imagens/ia.png",           categoria: "civilizacao" },
    rede:         { nome: "Rede",         imagem: "imagens/rede.png",         categoria: "civilizacao" },
    carroca:      { nome: "Carroça",      imagem: "imagens/carroca.png",      categoria: "civilizacao" },
    navio:        { nome: "Navio",        imagem: "imagens/navio.png",        categoria: "civilizacao" },
    
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
adicionarReceita("lama", "fogo", "argila");
adicionarReceita("vapor", "ar", "nuvem");
adicionarReceita("chuva", "terra", "pantano");
adicionarReceita("oceano", "sol", "sal");
adicionarReceita("sol", "energia", "estrela");
adicionarReceita("oceano", "vento", "onda");
adicionarReceita("chuva", "vento", "tempestade");
adicionarReceita("tempestade", "energia", "raio");
adicionarReceita("chuva", "sol", "arcoiris");
adicionarReceita("rio", "terra", "vale");
adicionarReceita("montanha", "agua", "rio");
adicionarReceita("montanha", "nuvem", "neve");
adicionarReceita("neve", "agua", "gelo");
adicionarReceita("gelo", "terra", "geleira");
adicionarReceita("oceano", "areia", "praia");
adicionarReceita("fogo", "sol", "calor");

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
adicionarReceita("planta", "agua", "alga");
adicionarReceita("alga", "oceano", "coral");
adicionarReceita("flor", "abelha", "mel");
adicionarReceita("fruta", "planta", "semente");
adicionarReceita("peixe", "peixe", "tubarao");
adicionarReceita("passaro", "ar", "ave");
adicionarReceita("reptil", "terra", "dinossauro");
adicionarReceita("humano", "animal", "domesticacao");
adicionarReceita("vida", "flor", "abelha")
adicionarReceita("vida", "floresta", "animal")
adicionarReceita("arvore", "arvore", "floresta")

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
adicionarReceita("casa", "casa", "vila");
adicionarReceita("vila", "vila", "cidade");
adicionarReceita("metal", "fogo", "ferramenta");
adicionarReceita("cidade", "metal", "industria");
adicionarReceita("cidade", "eletricidade", "tecnologia");
adicionarReceita("robo", "computador", "ia");
adicionarReceita("computador", "internet", "rede");
adicionarReceita("roda", "madeira", "carroca");
adicionarReceita("barco", "metal", "navio");

//Repetições
adicionarReceita("nuvem", "agua", "chuva");
adicionarReceita("neve", "fogo", "agua");
adicionarReceita("gele", "fogo", "agua");
adicionarReceita("neve", "calor", "agua");
adicionarReceita("gelo", "calor", "agua");
adicionarReceita("nuvem", "vento", "tempestade");
adicionarReceita("semente", "planta", "fruta");
adicionarReceita("argila", "argila", "tijolo");
adicionarReceita("sol", "sol", "calor");
adicionarReceita("tijolo", "tijolo", "tijolo");
adicionarReceita("poeira", "vida", "humano");
adicionarReceita("areia", "calor", "vidro");
adicionarReceita("lama", "sol", "argila");
adicionarReceita("chuva", "lama", "pantano");
adicionarReceita("chuva", "energia", "tempestade")
adicionarReceita("chuva", "eletricidade", "tempestade")
adicionarReceita("chuva", "raio", "tempestade")
adicionarReceita("vida", "lama", "humano")
adicionarReceita("arvore", "ferramenta", "madeira")
adicionarReceita("madeira", "ferramenta", "roda")
adicionarReceita("metal", "calor", "ferramenta")
adicionarReceita("vida", "agua", "peixe")


