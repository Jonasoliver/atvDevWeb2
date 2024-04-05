import express from 'express'
import connection from './database'

const app = express()

// Rota para buscar todos os usuários do banco de dados

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM cliente', (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err)
            res.status(500).send('Erro ao buscar clientes')
            return
      }
    connection.query('SELECT * FROM pedidos', (err, results2) => {
    if (err) {
        console.error('Erro ao buscar usuário:', err)
        res.status(500).send('Erro ao buscar pedidos')
        return
    }
        res.render('index', { cliente: results , pedidos: results2})
    })
    })
})

// Iniciando o servidor 

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})