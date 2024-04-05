"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var database_1 = require("./database");
var app = (0, express_1.default)();
// Rota para buscar todos os usuários do banco de dados
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/usuarios', function (req, res) {
    console.log(__dirname);
    database_1.default.query('SELECT * FROM cliente', function (err, results) {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            res.status(500).send('Erro ao buscar clientes');
            return;
        }
        database_1.default.query('SELECT * FROM pedidos', function (err, results2) {
            if (err) {
                console.error('Erro ao buscar usuário:', err);
                res.status(500).send('Erro ao buscar pedidos');
                return;
            }
            res.render('index', { cliente: results, pedidos: results2 });
        });
    });
});
// Iniciando o servidor 
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});
