// Array de produtos
const produtos = [
    {
        id: 1,
        nome: "Seda Papelito King Size Tradicional c/36",
        preco: "R$ 5,00",
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
        preco: "R$ 7,00",
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
        preco: "R$ 20,00",
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
        preco: "R$ 15,00",
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
        preco: "R$ 35,00",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/194960/Cinzeiro-de-Metal-Papelito-Quatro-Elementos-Azul-33768.jpg?v=638550237882900000",
            "https://tiobob.vteximg.com.br/arquivos/ids/198809/Cinzeiro%20de%20Metal%20Abduzido%20Festa%20do%20Verde%20Unidade%2035790.jpg.jpg?v=638803332282800000",
            "https://tiobob.vteximg.com.br/arquivos/ids/198811/Cinzeiro%20de%20Metal%20Abduzido%20Mago%20Hiponga%20Unidade%2035788.jpg.jpg?v=638803332668200000",
        ],
        descricao: "Cinzeiro de Metal Papelito Quatro Elementos, disponível em diversos modelos.",
        especificacoes: ["Metal", "Diversos modelos disponíveis"]
    },
    {
        id: 8,
        nome: "Seda para Cigarro Blunt",
        preco: "R$ 15,00",
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
        preco: "R$ 25,00",
        imagens: [
            "https://tiobob.vteximg.com.br/arquivos/ids/197927/Desfiador%20de%20Policarbonato%20Grande%20Sadhu%20Preto%2035609-1.jpg.jpg?v=638779269887130000",
            "https://tiobob.vteximg.com.br/arquivos/ids/197927/Desfiador%20de%20Policarbonato%20Grande%20Sadhu%20Preto%2035609-1.jpg.jpg?v=638779269887130000"
        ],
        descricao: "Desfiador de Policarbonato Pequeno Sadhu, prático e durável.",
        especificacoes: ["Policarbonato", "Pequeno"]
    }
];

// Função para criar o card de produto
function criarCardProduto(produto) {
    return `
        <div class="produto-card">
            <a href="produto-detalhes.html?id=${produto.id}">
                <div class="produto-imagem">
                    <img src="${produto.imagens[0]}" alt="${produto.nome}">
                </div>
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p class="produto-preco">${produto.preco}</p>
                </div>
            </a>
        </div>
    `;
}

// Função para renderizar os produtos
function renderizarProdutos() {
    const produtosGrid = document.querySelector('.produtos-grid');
    produtosGrid.innerHTML = produtos.map(criarCardProduto).join('');
}

// Renderizar produtos quando a página carregar
document.addEventListener('DOMContentLoaded', renderizarProdutos); 