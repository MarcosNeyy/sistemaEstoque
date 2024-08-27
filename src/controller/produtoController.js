const { DELETE } = require('sequelize/lib/query-types');
const ModelProduto = require('../models/produto');

module.exports = 
{
    async List(req,res)
    {
        try {
            const produtos = await ModelProduto.findAll()
            
            return res.json(produtos);


        } catch (error) {
            
            return console.error("Erro na List : ",error);

        }
    },

    async Create(req,res)
    {
        try {
            const produtos = await ModelProduto.create(
                {
                    Codigo: req.body.Codigo,
                    Produto: req.body.Produto,
                    medida: req.body.medida,
                    qtd_estoque: req.body.qtd_estoque,
                    comprar: req.body.comprar,
                    preco_Custo: req.body.preco_Custo,
                    preco_venda: req.body.preco_venda
                }
            );
            return res.json(produtos);


        } catch (error) {
            return console.error("Erro na create : ",error);

        }
    },
    async update(req,res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.codigo);
            if (prod){
                prod.Produto     = req.body.Produto;
                prod.medida      = req.body.medida;
                prod.comprar     = req.body.comprar;
                prod.preco_Custo = req.body.preco_Custo;
                prod.preco_venda = req.body.preco_venda;
                await prod.save();
              
            }

            return res.json(prod);


        } catch (error) {
            return console.error("Erro na update : ",error);

        }
    },
    async GetOne(req, res) {
        try {
            // Busca o produto pelo código fornecido
            const prod = await ModelProduto.findByPk(req.body.codigo);
    
            // Verifica se o produto foi encontrado
            if (prod) {
                return res.json(prod); // Retorna o produto encontrado
            } else {
                return res.status(404).json({ message: "Produto não encontrado" }); // Retorna 404 se o produto não existir
            }
        } catch (error) {
            // Registra o erro e retorna um status 500 em caso de erro no servidor
            console.error("Erro na GetOne: ", error);
            return res.status(500).json({ message: "Erro no servidor" });
        }
    },
    
    async Delete(req,res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.codigo);
            await prod.destroy();
            return res.json(prod);


        } catch (error) {
            return console.error("Erro na update : ",error);

        }
    }

}
