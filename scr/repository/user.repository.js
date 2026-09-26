const pool = require('../config/database'); //Importar os arquivos da pasta config/database
const findAll = async () =>{
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;    
};

module.exports = {findAll}