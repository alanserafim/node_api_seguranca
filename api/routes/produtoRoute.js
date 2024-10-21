const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const roles = require('../middlewares/roles')
const permissoes = require("../middlewares/permissoes")

const router = Router()

router
  .post('/produto', ProdutoController.cadastrarProduto)
  .get('/produto', permissoes(['deletar']), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id', ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', ProdutoController.editarProduto)

module.exports = router

/*

router
  .post('/produto', permissoesRoles(["adicionar"]), ProdutoController.cadastrarProduto)
  .get('/produto', permissoes(["listar"]), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', permissoesRoles(["listar"]), ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id', roles(["Gerente"]), permissoes(["excluir"]), ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', permissoesRoles(["editar"]), ProdutoController.editarProduto)
module.exports = router

*/