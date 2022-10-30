const http = require('http');
const port = 8000;

const routes = {
  '/': 'Codeshare server',
  '/codes': 'Codes saved',
  '/users': 'Users'
};

// Criando o servidor e definindo o que ele vai escutar
const server = http.createServer((req, res) => {
  // status, {tipo de conteúdo}
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // configurando cabeçalho
  //res.end('Curso de Node'); // conteúdo renderizado estático em tela ↓
  res.end(routes[req.url]); // mostra conteúdo de acordo com a url
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});