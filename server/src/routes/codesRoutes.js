// Nas rotas, precisamos do Express
import express from 'express';
import CodeController from '../controllers/codesController.js';

// nossas rotas usarão o roteamento do express
const router = express.Router();

// aqui definiremos os métodos http
router
  .get('/codes', CodeController.listCodes)
  .get('/codes/:id', CodeController.listCodesById)
  .post('/codes', CodeController.registerCode)
  .put('/codes/:id', CodeController.updateCode);

// exportaremos para o app.js
export default router;