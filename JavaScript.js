class Produto {
    constructor(nome){
        this.nome = nome;
    }
}

// Controller: Gerencia a lógica de negócio
class ProdutoController {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(nome, preco, quantidade) {
        const produto = new Produto(nome, preco, quantidade);
        this.produtos.push(produto);
    }

    listarProdutos() {
        return this.produtos;
    }
}

function renderizarProdutos(produtos) {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = ''; // Limpa a tabela antes de renderizar

    produtos.forEach(produto => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${produto.nome}</td>
            <td><button onclick="atualizarQuantidade('${produto.nome}')">Atualizar</button></td>
        `;

        listaProdutos.appendChild(row);
    });
}

// Controller de produto
const controller = new ProdutoController();

// Handler para adicionar produto
document.getElementById('formProduto').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;

    controller.adicionarProduto(nome);
    renderizarProdutos(controller.listarProdutos());

    
});

const sql = requeri('mssql');

const config ={
    user
}