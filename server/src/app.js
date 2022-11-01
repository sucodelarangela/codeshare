// configurando o uso do express
import express from 'express';
import db from './config/dbConnect.js'; // importando o db

// se ocorrer algum erro na conexão, fazemos um link com o nosso terminal para mostrar esse erro
db.on('error', console.log.bind(console, 'Erro de conexão'));

// Uma vez feita a conexão, loga uma mensagem no console
db.once('open', () => {
  console.log('A conexão com o banco ocorreu com sucesso.');
});

const app = express();

app.use(express.json()); // para conseguir interpretar o que vem via POST ou PUT como json

const codes = [
  { id: 1, title: '<p>Hello World</p>' },
  { id: 2, title: '<h1>Title</h1>' }
];

// requisições:
app.get('/', (req, res) => {
  res.status(200).send('Codeshare');
});

app.get('/codes', (req, res) => {
  res.status(200).json(codes);
});

app.get('/codes/:id', (req, res) => {
  let index = findCode(req.params.id);
  res.json(codes[index]);
});

app.post('/codes', (req, res) => {
  codes.push(req.body); // acrescenta no array o que vier no corpo da requisição
  res.status(201).send('O código foi cadastrado com sucesso.');
});

app.put('/codes/:id', (req, res) => {
  let index = findCode(req.params.id);
  codes[index].title = req.body.title;
  res.json(codes);
});

app.delete('/codes/:id', (req, res) => {
  let { id } = req.params; // desestruturação
  let index = findCode(id);
  codes.splice(index, 1);
  res.send(`Código ${id} removido com sucesso!`);
});

// função para o put: temporária pois ainda não estamos com o banco de dados implementado
function findCode(id) {
  return codes.findIndex(code => code.id == id);
}

export default app;