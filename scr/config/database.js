//Definir a variavel 
const mysql = require('mysql2/promise');// Importar o mysql2/promise das dependencias que baixamos do projecto
require('dotenv').config();//Importamos o ficheiro dotenv para mapear as variaveis de ambiente
 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});
 
module.exports = pool;