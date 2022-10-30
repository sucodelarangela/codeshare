// configurando o uso do express
import express from 'express';
const app = express();

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

export default app;