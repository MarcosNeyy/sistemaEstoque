const sequelize = require('sequelize');

const database = new sequelize('estoque','ney','1234',   // nome do banco de dados e usuario e senha do SQL SERVER
    {
        dialect: 'mssql',host:'NEYPC',port:1433 //banco de dados que esta utilizando  e o nome do servidor
    }
);

database.sync();

module.exports = database;