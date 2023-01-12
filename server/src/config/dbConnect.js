// arquivo de configuração da conexão com o banco de dados
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = process.env.DBCONNECTION;
console.log(dbConnection);

// pedir conexão
mongoose.connect(dbConnection);

// criando e exportando a conexão do db para o app.js
let db = mongoose.connection;

export default db;