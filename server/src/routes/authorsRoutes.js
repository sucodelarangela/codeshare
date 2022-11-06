// Nas rotas, precisamos do Express
import express from 'express';
import AuthorController from '../controllers/authorsController.js';

// nossas rotas usarão o roteamento do express
const router = express.Router();

// aqui definiremos os métodos http
router
  .get('/authors', AuthorController.listAuthors)
  .get('/authors/:id', AuthorController.listAuthorsById)
  .post('/authors', AuthorController.registerAuthor)
  .put('/authors/:id', AuthorController.updateAuthor)
  .delete('/authors/:id', AuthorController.deleteAuthor);

// exportaremos para o app.js
export default router;