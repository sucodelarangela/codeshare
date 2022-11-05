// configurando o uso do express
import express from 'express';
import db from './config/dbConnect.js'; // importando o db
import routes from './routes/index.js';

// se ocorrer algum erro na conexão, fazemos um link com o nosso terminal para mostrar esse erro
db.on('error', console.log.bind(console, 'Erro de conexão'));

// Uma vez feita a conexão, loga uma mensagem no console
db.once('open', () => {
  console.log('Connection to database successful.');
});

const app = express();

app.use(express.json()); // para conseguir interpretar o que vem via POST ou PUT como json

routes(app);

export default app;