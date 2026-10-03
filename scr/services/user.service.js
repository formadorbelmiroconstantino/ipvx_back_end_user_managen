
const userRepository = require('../repository/user.repository'); //Importar o arquivos da pasta repository
const getUsers = async () => {
    const users = await userRepository.findAll(); //Chamamos a funcao findAll() do repositorio
    return users;
};

const createUser = async (data) => {
    const { name, email, age } = data;
    //Regra de negocio
    const verificarUser = await userRepository.findByEmail(email); // Funcao para consultar o email
    if (verificarUser) {
        throw new Error('Já existe um utilizador com este email.');
    }

    const id = await userRepository.create(name, email, age);
    return await userRepository.findById(id);
}
//Exportar o findAll() - ao invoca-lo vai exibir o nome porque no user.repository.js tambem exportamos
module.exports = { getUsers, createUser } //Exportar os metodos para serem utilizados no controller