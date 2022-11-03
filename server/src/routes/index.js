// este arquivo concentra todas as rotas a serem usadas na aplicação, dessa forma, organizamos melhor e não precisamos fazer várias importações de arquivos
import express from 'express';
import codes from './codesRoutes.js';

const routes = (app) => {
  // essa requisição só devolve um texto estático, então não há problema ela ficar toda aqui. As demais requisições deverão ficar no codesController
  app.route('/').get((req, res) => {
    res.status(200).send('Codeshare database');
  });

  // Para os demais casos, usaremos:
  app.use(
    express.json(),
    codes
  );
};

export default routes;