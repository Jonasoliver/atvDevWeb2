import mysql from 'mysql2'

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'atvdevweb'
})

// Conectar ao banco de dados 
connection.connect((err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados:', err)
    return
  }
  console.log('Conexão bem-sucedida ao banco de dados!')
})

// Exportar a conexão para ser usada em outros módulos
export default connection