const userRepository = require('../repository/user.repository'); //Importar o arquivos da pasta repository
const getUsers = async () =>{
const users = await userRepository.findAll(); //Chamamos a funcao findAll() do repositorio
return users;
};
module.exports = {getUsers} //Exportar o findAll() - ao invoca-lo vai exibir o nome porque no user.repository.js tambem exportamos