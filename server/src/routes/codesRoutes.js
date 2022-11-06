// Nas rotas, precisamos do Express
import express from 'express';
import CodeController from '../controllers/codesController.js';

// nossas rotas usarão o roteamento do express
const router = express.Router();

// aqui definiremos os métodos http
router
  .get('/codes', CodeController.listCodes)
  .get('/codes/search', CodeController.listCodesByAuthor) // deve vir antes da rota com params :id
  .get('/codes/:id', CodeController.listCodesById)
  .post('/codes', CodeController.registerCode)
  .put('/codes/:id', CodeController.updateCode)
  .delete('/codes/:id', CodeController.deleteCode);

// exportaremos para o app.js
export default router;