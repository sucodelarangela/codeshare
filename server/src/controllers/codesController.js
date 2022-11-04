import codes from '../models/Code.js';

// classe para manter os métodos
class CodeController {
  static listCodes = (req, res) => {
    codes.find((err, codes) => {
      res.status(200).json(codes);
    });
  };

  static registerCode = (req, res) => {
    let newCode = new codes(req.body); // instanciamos nosso model para criar um novo registro de código com base no que vem no corpo da requisição

    console.log(newCode);

    // salvando os dados no banco
    newCode.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure when saving the data.` });
      } else {
        res.status(201).send(newCode.toJSON()); // retorna o próprio código que foi registrado em formato json
      }
    });
  };
}

// exportar para usar o controlador junto às rotas (criaremos um arquivo para tal)
export default CodeController;