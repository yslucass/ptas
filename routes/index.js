const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota principal
router.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema!');
});

// Rota para listar itens (GET)
router.get('/items', itemsController.getItems);

// Rota protegida (exemplo de uso do middleware de autenticação)
router.post('/items', authMiddleware, itemsController.createItem);

module.exports = router;
