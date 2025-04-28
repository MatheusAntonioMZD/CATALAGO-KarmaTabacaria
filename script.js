// Array de produtos
const produtos = [
    {
        id: 1,
        nome: "Seda Papelito King Size Tradicional c/36",
        preco: "R$ 5,50",
        imagens: [
            "https://papelitobrasil.com/wp-content/uploads/2022/03/Papelito-Tradicional-KS-03.png.webp",
            "https://images.tcdn.com.br/img/img_prod/767482/seda_papelito_tradicional_king_size_livreto_c_36_sedas_549_3_028f66bcabcba0aeb3b9f173fb8db653.jpg",
            "https://storage.moovin.store/main/262b3bea-469b-40d2-b302-a41597ebfcbf/image-removebg-preview%20-%202024-01-30T201313.948-1706656405189.png?v=1706656405996&ims=fit-in/1000x"
        ],
        descricao: "Seda Papelito King Size Tradicional com 36 unidades. Ideal para quem busca qualidade e praticidade.",
        especificacoes: ["36 unidades", "King Size", "Tradicional"]
    },
    {
        id: 2,
        nome: "Seda Papelito Tradicional Com Bandeja + Piteiras",
        preco: "R$ 12,00",
        imagens: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_612501-MLB76929214102_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_961871-MLB76912995850_062024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_807628-MLB77121882613_062024-F.webp",
        ],
        descricao: "Kit completo com Seda Papelito Tradicional, bandeja e piteiras. Tudo que você precisa em um só lugar.",
        especificacoes: ["Seda Tradicional", "Bandeja", "Piteiras"]
    },
    {
        id: 3,
        nome: "Seda Papelito Tradicional King Size Longa",
        preco: "R$ 9,50",
        imagens: [
            "https://images.tcdn.com.br/img/img_prod/952861/seda_papelito_tradicional_king_size_longa_un_25118_1_e6bc3f7de674c7012a0788a917f604e3.jpg",
            "https://tiobob.fbitsstatic.net/img/p/papel-papelito-longa-tradicional-126529/324564-2.jpg?w=425&h=425&v=202501231557&qs=ignore"
        ],
        descricao: "Seda Papelito Tradicional King Size Longa, perfeita para quem busca mais espaço.",
        especificacoes: ["King Size Longa", "Tradicional"]
    },
    {
        id: 4,
        nome: "Cuia de Silicone ToNaBê - Consulte as Cores Disponiveis",
        preco: "R$ 21,90",
        imagens: [
            "https://images.tcdn.com.br/img/img_prod/1255916/cuia_de_silicone_tonabe_1847_1_f643e074991b4e0a39925386dd9d9e21.png",
            "https://images.tcdn.com.br/img/img_prod/1255916/cuia_de_silicone_tonabe_1847_6_a94970b9c24afe90f6bc0d698cb3c066.png",
            "https://images.tcdn.com.br/img/img_prod/1255916/cuia_de_silicone_tonabe_1847_7_24bdbda8aac94facccdd566724409a9d.png",
            "https://images.tcdn.com.br/img/img_prod/1255916/cuia_de_silicone_tonabe_1847_8_253482b5344bce4d61bff21b28bf9f90.png",
            "https://images.tcdn.com.br/img/img_prod/1255916/cuia_de_silicone_tonabe_1847_9_a1af8d00e226c64e674d1ddb33d88dca.png"
        ],
        descricao: "Cuia de Silicone ToNaBê, disponível em diversas cores. Prática e durável.",
        especificacoes: ["Silicone", "Diversas cores disponíveis"]
    },
    {
        id: 5,
        nome: "Case Estampada Media ToNaBê - Disponível em Diversos Modelos.",
        preco: "R$ 40,00",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/198787/Case-TonaBe-Medio-Carta-36319.jpg.jpg?v=638803326128670000",
            "https://tiobob.vteximg.com.br/arquivos/ids/198769/Case-TonaBe-Grande-Bomb-36324.jpg.jpg?v=638803324123570000",
            "https://tiobob.vteximg.com.br/arquivos/ids/198775/Case-TonaBe-Grande-Bike-36326.jpg.jpg?v=638803324290370000",
            "https://tiobob.vteximg.com.br/arquivos/ids/198776/_case--1-.jpg.jpg?v=638803324290500000",
            "https://tiobob.vteximg.com.br/arquivos/ids/198777/_case--2-.jpg.jpg?v=638803324290500000",
        ],
        descricao: "Case Estampada Media ToNaBê, disponível em diversos modelos. Proteja seus pertences com estilo.",
        especificacoes: ["Média", "Diversos modelos disponíveis"]
    },
    {
        id: 6,
        nome: "Tesoura Abduzido Classic Carbon",
        preco: "R$ 16,50",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/193045/Tesoura-Abduzido-Classic-Carbon-Black-32275-1.jpg?v=638418861790730000",
            "https://tiobob.vteximg.com.br/arquivos/ids/193044/Tesoura-Abduzido-Classic-Carbon-Black-32275.jpg?v=638418861690300000"
        ],
        descricao: "Tesoura Abduzido Classic Carbon, perfeita para cortes precisos.",
        especificacoes: ["Carbon", "Classic"]
    },
    {
        id: 7,
        nome: "Cinzeiro de Metal - Modelos Variados Disponiveis",
        preco: "R$ 23,00",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/194960/Cinzeiro-de-Metal-Papelito-Quatro-Elementos-Azul-33768.jpg?v=638550237882900000",
            "https://tiobob.vteximg.com.br/arquivos/ids/198809/Cinzeiro%20de%20Metal%20Abduzido%20Festa%20do%20Verde%20Unidade%2035790.jpg.jpg?v=638803332282800000",
            "https://tiobob.vteximg.com.br/arquivos/ids/198811/Cinzeiro%20de%20Metal%20Abduzido%20Mago%20Hiponga%20Unidade%2035788.jpg.jpg?v=638803332668200000",
        ],
        descricao: "Cinzeiro de Metal Papelito Quatro Elementos, disponível em diversos modelos.",
        especificacoes: ["Metal", "Diversos modelos disponíveis"]
    },
    {
        id: 18,
        nome: "Bandeja Abduzido de Meta Mago Hipongal 20x10 Pequena",
        preco: "R$ 32,00",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/193194/Bandeja-Abduzido-de-Metal-20x10-Mago-Hiponga-32568.jpg?v=638437018032100000",
            "https://tiobob.vteximg.com.br/arquivos/ids/193195/Bandeja-Abduzido-de-Metal-20x10-Mago-Hiponga-32568-1.jpg?v=638802586612600000",
        ],
        
        descricao: "A Bandeja Abduzido de Metal Mago Hiponga é um acessório importante na hora de bolar o seu cigarro, você garante que a sua mesa não fique aquela bagunça, além de evitar desperdício de seu tabaco.",
        especificacoes: ["Tamanho   Mini", "Largura    20,5cm", "Comprimento    10,5cm"]
    },
    {
        id: 19,
        nome: "Bandeja Abduzido de Metal Mago Hiponga 29x19 Grande",
        preco: "R$ 53,00",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/193194/Bandeja-Abduzido-de-Metal-20x10-Mago-Hiponga-32568.jpg?v=638437018032100000",
            "https://tiobob.vteximg.com.br/arquivos/ids/193195/Bandeja-Abduzido-de-Metal-20x10-Mago-Hiponga-32568-1.jpg?v=638802586612600000",
        ],
        
        descricao: "A Bandeja Abduzido de Metal Mago Hiponga é um acessório importante na hora de bolar o seu cigarro, você garante que a sua mesa não fique aquela bagunça, além de evitar desperdício de seu tabaco.",
        especificacoes: ["Tamanho   Grande", "Largura    29cm", "Comprimento    19cm"]
    },
    {
        id: 8,
        nome: "Seda para Cigarro Blunt",
        preco: "R$ 17,00",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/196387/Papel-para-Cigarro-Blunt-Hemp-Wrap-Lion-Rolling-Circus-Terpenes-KKSH-Unidade-29320.jpg?v=638622802601300000",
            "https://tiobob.vteximg.com.br/arquivos/ids/196387/Papel-para-Cigarro-Blunt-Hemp-Wrap-Lion-Rolling-Circus-Terpenes-KKSH-Unidade-29320.jpg?v=638622802601300000"
        ],
        descricao: "Papel para Cigarro Blunt Hemp Wrap, com terpenos para um sabor diferenciado.",
        especificacoes: ["Hemp Wrap", "Com terpenos"]
    },
    {
        id: 9,
        nome: "Desfiador de Policarbonato Pequeno Sadhu",
        preco: "R$ 13,90",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/197927/Desfiador%20de%20Policarbonato%20Grande%20Sadhu%20Preto%2035609-1.jpg.jpg?v=638779269887130000",
            "https://tiobob.vteximg.com.br/arquivos/ids/197927/Desfiador%20de%20Policarbonato%20Grande%20Sadhu%20Preto%2035609-1.jpg.jpg?v=638779269887130000"
        ],
        descricao: "Desfiador de Policarbonato Pequeno Sadhu, prático e durável.",
        especificacoes: ["Policarbonato", "Pequeno"]
    },
    {
        id: 10,
        nome: "Piteira Papelito Tropical Large",
        preco: "R$ 5,00",
        imagens: [
            "https://images.tcdn.com.br/img/img_prod/1039722/piteira_papelito_tropical_large_c_50_uni_3105_1_e176f792abbeb5ef5c6f820e305d2a6d.jpg",
            "https://images.tcdn.com.br/img/img_prod/1039722/piteira_papelito_tropical_large_c_50_uni_3105_2_4da8b404c0856ee9d93db6dcd7115d2a.jpg"
        ],
        descricao: "Desfiador de Policarbonato Pequeno Sadhu, prático e durável.",
        especificacoes: ["Policarbonato", "Pequeno"]
    },
    {
        id: 11,
        nome: "Piteira de Vidro Simples 5cm",
        preco: "R$ 9,00",
        imagens: [
            "https://strabeinc.com/cdn/shop/files/fe1c6061d40665c78b5de23853676a09.png?v=1738611189&width=713",
            "https://strabeinc.com/cdn/shop/files/21d886964bfc324456d9568fb9e4e909.png?v=1738611189&width=713",
            "https://strabeinc.com/cdn/shop/files/ee258bb29188d648a4899dba5f629b12.png?v=1738611189&width=713",
        ],
        descricao: "As piteiras de vidro simples de 5cm são fabricadas com borossilicato alemão, mantendo os rigorosos padrões de qualidade exclusiva.",
        especificacoes: ["Alta resistência (calor e queda)", "Conforto excepcional","Redução de danos","Qualidade superior"]
    },
    {
        id: 12,
        nome: "Piteira de Vidro Simples 7cm",
        preco: "R$ 11,00",
        imagens: [
           "https://strabeinc.com/cdn/shop/files/b273eb75594277cde7f5d99a79177663.png?v=1738611331&width=713",
           "https://strabeinc.com/cdn/shop/files/f4883fb1ef4d7d9e95388394162c5e83.png?v=1738611331&width=713",
           "https://strabeinc.com/cdn/shop/files/fde84047c127046b47de9667234adb32.png?v=1738611331&width=713",
        ],
        descricao: "As piteiras de vidro simples de 7cm são fabricadas com borossilicato alemão, mantendo os rigorosos padrões de qualidade exclusiva.",
        especificacoes: ["Alta resistência (calor e queda)", "Conforto excepcional","Redução de danos","Qualidade superior"]
    },
    {
        id: 13,
        nome: "Piteira de Vidro com Esferas de Vidro",
        preco: "R$ 17,00",
        imagens: [
          "https://strabeinc.com/cdn/shop/files/f84bfefea78fcde725a0cdf62e8dc6ea.png?v=1738609043&width=713",
          "https://strabeinc.com/cdn/shop/files/7d45b52676ef14c833736e57bda05b62.png?v=1738609043&width=713",
          "https://strabeinc.com/cdn/shop/files/e7401ed462f8f7c2083860afde7fccc9.png?v=1738609043&width=713",
        ],
        descricao: "Esta piteira de vidro vai revolucionar sua sessão e fumaça QUENTE, vai se tornar passado na sua vida! O design inovador com esferas de vidro aumenta a superfície de contato com a fumaça, proporcionando uma redução significativa de danos e uma experiência mais suave.",
        especificacoes: ["Alta resistência (calor e queda)", "Conforto excepcional","Redução de danos","Qualidade superior"]
    },
    {
        id: 14,
        nome: "Piteira de Vidro Extra Longa",
        preco: "R$ 16,00",
        imagens: [
            "https://strabeinc.com/cdn/shop/files/c92f5ca60e0aa2811a9c37be82999834.png?v=1738609247&width=713",
            "https://strabeinc.com/cdn/shop/files/de761a040c42bf998c4b387f3b29d61f.png?v=1738609247&width=713",
            "https://strabeinc.com/cdn/shop/files/092fd282058a3f727cf0a934bbb52302.png?v=1738609247&width=713",
            "https://strabeinc.com/cdn/shop/files/176b663e58ba21a13770ef9c425ef6f6.png?v=1738609247&width=713",
        ],
        descricao: "Com corpo alongado, as XXL são grandes aliadas a redução de danos, a fumaç4 percorre um caminho muito mais longo ate você, devido ao aumento da superfície de contato a fumaça é resfriada com mais eficácia e ao corpo aderem mais resíduos te dando uma onda muito mais limpa e saudável, além de trazer muita elegância na hora da sessão.",
        especificacoes: ["Alta resistência (calor e queda)", "Conforto excepcional","Redução de danos","Qualidade superior"]
    },
    {
        id: 15,
        nome: "Piteira de Vidro Bocal Implosion",
        preco: "R$ 50,00",
        imagens: [
            "https://strabeinc.com/cdn/shop/files/7f75e6e42fb2be9345793b7f9aedffaa.png?v=1741969158&width=713",
            "https://strabeinc.com/cdn/shop/files/147cfc3002bb415a2eed6e19964e3856.png?v=1741969158&width=713",
            "https://strabeinc.com/cdn/shop/files/29b51e2cfc451f9cac969588ccbf2c0a.png?v=1741969158&width=713",
        ],
        descricao: "As piteiras de vidro Implosion além de ter um papel essencial na REDUÇÃO DE DANOS, vai trazer muito mais estilo para sua coleção de joias!",
        especificacoes: ["Alta resistência (calor e queda)", "Conforto excepcional","Redução de danos","Qualidade superior"]
    },
    {
        id: 16,
        nome: "Piteira de Vidro Full Print",
        preco: "R$ 22,00",
        imagens: [
            "https://strabeinc.com/cdn/shop/files/2023fba5039c91a4f6bbbddcd6b5ce53.png?v=1741964218&width=713",
            "https://strabeinc.com/cdn/shop/files/96d23fc0d31099e2ccf8ac142d451023.png?v=1741964230&width=713",
        ],
        descricao: "Todos os detalhes dessa piteira foram pensados para deixar a sua sessão mais palosa possível!",
        especificacoes: ["Piteiras de 6mm com 6cm de comprimento"]
    },
    {
        id: 17,
        nome: "Marica Para Cigarro",
        preco: "R$ 7,00",
        imagens: [
            "https://strabeinc.com/cdn/shop/files/9e1b0104ad4c211d0f1a1ac49f023e9a.png?v=1741886899&width=713",
            "https://strabeinc.com/cdn/shop/files/ba2e11bc89da81fa52eb9fb3d0edf4cd.png?v=1741886899&width=713",
        ],
        descricao: "Todos os detalhes dessa piteira foram pensados para deixar a sua sessão mais palosa possível!",
        especificacoes: ["Piteiras de 6mm com 6cm de comprimento"]
    }
];



// Função para criar o card de produto
function criarCardProduto(produto) {
    // Verifica se é um produto do array principal ou do array de piteiras
    const imagem = produto.imagens ? produto.imagens[0] : produto.imagem;
    
    // Conteúdo do card
    const conteudo = `
        <div class="produto-imagem">
            <img src="${imagem}" alt="${produto.nome}">
        </div>
        <div class="produto-info">
            <h3>${produto.nome}</h3>
            <p class="produto-preco">${produto.preco}</p>
        </div>
    `;

    // Sempre adiciona o link para detalhes, mas mantém o data-tipo para filtros
    return `
        <div class="produto-card" ${produto.tipo ? `data-tipo="${produto.tipo}"` : ''}>
            <a href="produto-detalhes.html?id=${produto.id}">
                ${conteudo}
            </a>
        </div>
    `;
}



// Função para mostrar todos os produtos na página inicial
function mostrarProdutosInicio() {
    const produtosGrid = document.querySelector('.produtos-grid');
    if (produtosGrid) {
        produtosGrid.innerHTML = produtos.map(criarCardProduto).join('');
    }
}



// Inicializa a página
document.addEventListener('DOMContentLoaded', () => {
    // Verifica em qual página estamos
    const isPaginaPiteiras = window.location.pathname.includes('piteiras.html');
    
    if (isPaginaPiteiras) {
        // Se estiver na página de piteiras, inicializa os filtros
        mostrarProdutos();
        inicializarFiltros();
    } else {
        // Se estiver na página inicial, mostra todos os produtos
        mostrarProdutosInicio();
    }
}); 