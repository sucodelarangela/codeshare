import authors from '../models/Author.js';

// classe para manter os métodos - GET
class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static listAuthorsById = (req, res) => {
    const { id } = req.params;
    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Author id not found` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static registerAuthor = (req, res) => {
    let newAuthor = new authors(req.body); // instanciamos nosso model para criar um novo registro de código com base no que vem no corpo da requisição

    // salvando os dados no banco - POST
    newAuthor.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure when saving the data.` });
      } else {
        res.status(201).send(newAuthor.toJSON()); // retorna o próprio código que foi registrado em formato json
      }
    });
  };

  // atualizando códigos - PUT
  static updateAuthor = (req, res) => {
    const { id } = req.params;
    // (id, critério de atualização)
    // No MongoDb, a palavra reservada $set determina o que deve ser substituído
    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send('Author updated successfully');
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  // deletando um código - DELETE
  static deleteAuthor = (req, res) => {
    const { id } = req.params;
    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send('Author deleted successfully');
      } else {
        status(500).send({ message: err.message });
      }
    });
  };
}

// exportar para usar o controlador junto às rotas (criaremos um arquivo para tal)
export default AuthorController;