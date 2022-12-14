import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    photoURL: { type: String }
  },
  {
    versionKey: false // controle do versionamento
  }
);

const authors = mongoose.model('authors', authorSchema);

export default authors;