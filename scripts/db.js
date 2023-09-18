const mysql = require('mysql2');

// Configurações da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',    // Host do banco de dados
  user: 'seu_usuario',  // Nome de usuário
  password: 'sua_senha',  // Senha
  database: 'nome_do_banco_de_dados',  // Nome do banco de dados
});

// Estabelecendo a conexão
connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
    
    // executar consultas ou outras operações aqui
    // connection.query('SELECT * FROM tabela', (err, results) => { ... });
  }
});
