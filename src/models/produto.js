const sequelize = require('sequelize');
const database = require('../db');
const schema = "";

class produto extends sequelize.Model{}

produto.init(
    {
        codigo:
        {
            type:sequelize.INTEGER,
            autoIncrement:true,
            allowNull: false,
            primaryKey: true
        },
        Produto:
        {
            type:sequelize.STRING,
            allowNull: true,
        },
        medida:
        {
            type:sequelize.STRING,
            allowNull: true,
        },
        comprar:
        {   
            type:sequelize.INTEGER,
            allowNull: true,
        },
        preco_Custo:
        {
            type:sequelize.FLOAT,
            allowNull: true,
        },
        preco_venda:
        {
            type:sequelize.FLOAT,
            allowNull: true,
        },
        dataCriacao:
        {
            type: sequelize.DATE,
            allowNull: true
        }

    },
    {
        sequelize : database, modelName: 'cadProd', schema
    }
)
module.exports = produto;