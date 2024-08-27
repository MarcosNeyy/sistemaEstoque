const express = require('express');
const controllerProduto = require('./controller/produtoController');
const app = express();
app.use(express.json());

const routes = express.Router();

routes.get('/List',controllerProduto.List);
routes.post('/Create',controllerProduto.Create);
routes.post('/update',controllerProduto.update);
routes.get('/GetOne',controllerProduto.GetOne);
routes.post('/Delete',controllerProduto.Delete);

module.exports = routes;