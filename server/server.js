const http = require('http');
const port = 8000;

// Criando o servidor e definindo o que ele vai escutar
const server = http.createServer((req, res) => {
  // status, {tipo de conteúdo}
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Curso de Node'); // conteúdo renderizado
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});