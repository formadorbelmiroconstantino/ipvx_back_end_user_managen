const pool = require('../config/database'); //Importar os arquivos da pasta config/database
//Consultar todos os usuarios
const findAll = async () =>{
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;  
};
//Consultar um usuario pelo ID
const findById = async (id)=>{
const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
return rows[0]; //Retorna o 1º registo
};

//Consultar um usuario por email
const findByEmail = async (email)=>{
const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
return rows[0]; //Retorna o 1º registo
};

//Inserir dados na tabela users
const create = async (name, email, age)=>{
    const result = await pool.query('INSERT INTO users(name, email, age) VALUES(?,?,?)', [name, email, age]);
    return result[0].insertId; // Retorna o ultimo registo inserido
}
module.exports = {findAll, findById, findByEmail, create} //Exportar os metodos para serem utilizados no service