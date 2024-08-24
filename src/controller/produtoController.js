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

            const prod = await ModelProduto.findByPk(req.body.Codigo);
            if (prod){
                prod.Produto     = req.body.Produto;
                prod.medida      = req.body.medida;
                prod.comprar     = req.body.comprar;
                prod.Custo       = req.body.preco_Custo;
                prod.venda       = req.body.preco_venda;
                await prod.save();
              
            }

            return res.json(produtos);


        } catch (error) {
            return console.error("Erro na update : ",error);

        }
    },
    async GetOne(req,res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo);
           
            return res.json(produtos);


        } catch (error) {
            return console.error("Erro na update : ",error);

        }
    },
    async Delete(req,res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo);
           await prod.destroy();
            return res.json(produtos);


        } catch (error) {
            return console.error("Erro na update : ",error);

        }
    }

}
