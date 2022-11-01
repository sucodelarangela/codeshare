// arquivo de configuração da conexão com o banco de dados
import mongoose from 'mongoose';

// pedir conexão
mongoose.connect('mongodb+srv://sucodelarangela:LdaPXoh7AxXbZhLi@cluster0.npf7im2.mongodb.net/codeshare');

// criando e exportando a conexão do db para o app.js
let db = mongoose.connection;

export default db;