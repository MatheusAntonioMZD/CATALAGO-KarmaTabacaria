// Array de produtos (você pode substituir por seus próprios produtos)
const produtos = [
    {
        nome: "Seda Papelito King Size Tradicional c/36",
        preco: "R$ 5,00",
        imagem: "https://papelitobrasil.com/wp-content/uploads/2022/03/Papelito-Tradicional-KS-03.png.webp"
    },
    {
        nome: "Seda Papelito Tradicional Com Bandeja + Piteiras",
        preco: "R$ 12,00",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_612501-MLB76929214102_062024-F.webp"
    },
    {
        nome: "Seda Papelito Tradicional King Size Longa",
        preco: "R$ 7,00",
        imagem: "https://images.tcdn.com.br/img/img_prod/952861/seda_papelito_tradicional_king_size_longa_un_25118_1_e6bc3f7de674c7012a0788a917f604e3.jpg"
    },
    {
        nome: "Cuia de Silicone ToNaBê - Consulte as Cores Disponiveis",
        preco: "R$ 20,00",
        imagem: "https://images.tcdn.com.br/img/img_prod/1255916/cuia_de_silicone_tonabe_1847_1_f643e074991b4e0a39925386dd9d9e21.png"
    },
    {
        nome: "Case Estampada Media ToNaBê -  Disponível em Diversos Modelos.",
        preco: "R$ 90,00",
        imagem: "https://tiobob.fbitsstatic.net/img/p/case-tonabe-grande-126739/325446.jpg?w=425&h=425"
    },
    {
        nome: "Tesoura Abduzido Classic Carbon",
        preco: "R$ 15,00",
        imagem: "https://tiobob.vteximg.com.br/arquivos/ids/193045/Tesoura-Abduzido-Classic-Carbon-Black-32275-1.jpg?v=638418861790730000"
    },
    {
        nome: "Cinzeiro de Metal - Modelos Variados Disponiveis",
        preco: "R$ 35,00",
        imagem: "https://tiobob.vteximg.com.br/arquivos/ids/194960/Cinzeiro-de-Metal-Papelito-Quatro-Elementos-Azul-33768.jpg?v=638550237882900000"
    },
    {
        nome: "Papel para Cigarro Blunt",
        preco: "R$ 15,00",
        imagem: "https://tiobob.vteximg.com.br/arquivos/ids/196387/Papel-para-Cigarro-Blunt-Hemp-Wrap-Lion-Rolling-Circus-Terpenes-KKSH-Unidade-29320.jpg?v=638622802601300000"
    },
    {
        nome: "Desfiador de Policarbonato Pequeno Sadhu",
        preco: "R$ 35,00",
        imagem: "https://tiobob.vteximg.com.br/arquivos/ids/197927/Desfiador%20de%20Policarbonato%20Grande%20Sadhu%20Preto%2035609-1.jpg.jpg?v=638779269887130000"
    },
    {
        nome: "So_Trocar_Aqui",
        preco: "R$ 35,00",
        imagem: "URL_DA_IMAGEM_DA_SEDA"
    },
];

// Função para criar o card de produto
function criarCardProduto(produto) {
    return `
        <div class="produto-card">
            <div class="produto-imagem">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p class="produto-preco">${produto.preco}</p>
            </div>
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