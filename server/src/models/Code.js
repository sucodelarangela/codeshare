import mongoose from 'mongoose';

// informando que este arquivo é um schema
const codeSchema = new mongoose.Schema({
  id: String,
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true },
  language: String,
  hljs: { type: String, default: 'a11yDark' },
  color: { type: String, default: '#6bd1ff' },
  // likes e comentários serão implementados futuramente
  // likes: { type: Number, default: 0 },
  // comments: [{
  //   content: { type: String },
  //   commentAuthor: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true }
  // }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true } // indicamos que o tipo do autor, agora, é uma referência a outro schema existente, no caso, authors
});

// criando o nome da coleção e informando qual será o schema dele. Se não tivéssemos criado no Atlas, ele criaria aqui automaticamente
const codes = mongoose.model('codes', codeSchema);

// exportando para uso no app.js
export default codes;