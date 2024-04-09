"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
// Configurações de conexão com o banco de dados
const connection = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'atvdevweb'
});
// Conectar ao banco de dados 
connection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados!');
});
// Exportar a conexão para ser usada em outros módulos
exports.default = connection;
