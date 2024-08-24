const express = require('express');
const controllerProduto = require('./controller/produtoController');

const routes = express.Router();

routes.get('/List',controllerProduto.List);
routes.post('/Create',controllerProduto.Create);
routes.post('/Upddate',controllerProduto.update);
routes.get('/GetOne',controllerProduto.GetOne);
routes.post('/Delete',controllerProduto.Delete);

module.exports = routes;