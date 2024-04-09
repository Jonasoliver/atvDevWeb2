"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
// Rota para buscar todos os usuários do banco de dados
app.set('view engine', 'ejs');
app.set('Views', './Views');
app.get('/usuarios', (req, res) => {
    database_1.default.query('SELECT * FROM cliente', (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            res.status(500).send('Erro ao buscar clientes');
            return;
        }
        database_1.default.query('SELECT * FROM pedidos', (err, results2) => {
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
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
