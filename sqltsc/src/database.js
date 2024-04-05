"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = require("mysql2");
// Configurações de conexão com o banco de dados
var connection = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'atvdevweb'
});
// Conectar ao banco de dados 
connection.connect(function (err) {
    if (err) {
        console.log('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados!');
});
// Exportar a conexão para ser usada em outros módulos
exports.default = connection;
