import codes from '../models/Code.js';

// classe para manter os métodos - GET
class CodeController {
  static listCodes = (req, res) => {
    codes.find((err, codes) => {
      res.status(200).json(codes);
    });
  };

  static listCodesById = (req, res) => {
    const { id } = req.params;
    codes.findById(id, (err, codes) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Code id not found` });
      } else {
        res.status(200).send(codes);
      }
    });
  };

  static registerCode = (req, res) => {
    let newCode = new codes(req.body); // instanciamos nosso model para criar um novo registro de código com base no que vem no corpo da requisição

    // salvando os dados no banco - POST
    newCode.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure when saving the data.` });
      } else {
        res.status(201).send(newCode.toJSON()); // retorna o próprio código que foi registrado em formato json
      }
    });
  };

  // atualizando códigos - PUT
  static updateCode = (req, res) => {
    const { id } = req.params;
    // (id, critério de atualização)
    // No MongoDb, a palavra reservada $set determina o que deve ser substituído
    codes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send('Code updated successfully');
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  // deletando um código - DELETE
  static deleteCode = (req, res) => {
    const { id } = req.params;
    codes.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send('Code deleted successfully');
      } else {
        status(500).send({ message: err.message });
      }
    });
  };
}

// exportar para usar o controlador junto às rotas (criaremos um arquivo para tal)
export default CodeController;