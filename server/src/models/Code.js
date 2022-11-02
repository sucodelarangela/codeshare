import mongoose from 'mongoose';

// informando que este arquivo é um schema
const codeSchema = new mongoose.Schema(
  {
    id: { type: String },
    code: [
      {
        id: { type: String },
        content: { type: String, required: true },
        likes: { type: Number }
      }
    ],
    author: { type: String, required: true },
    color: { type: String, required: true }
  }
);

// criando o nome da coleção e informando qual será o schema dele. Se não tivéssemos criado no Atlas, ele criaria aqui automaticamente
const codes = mongoose.model('codes', codeSchema);

// exportando para uso no app.js
export default codes;