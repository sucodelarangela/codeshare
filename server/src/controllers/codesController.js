import codes from '../models/Code.js';

// classe para manter os métodos
class CodeController {
  static listCodes = (req, res) => {
    codes.find((err, codes) => {
      res.status(200).json(codes);
    });
  };
}

// exportar para usar o controlador junto às rotas (criaremos um arquivo para tal)
export default CodeController;