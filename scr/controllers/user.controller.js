const userService = require('../services/user.service');//Importar o arquivos da pasta service

// Funcoes que vao conversar com service
const getUsers = async (req, res) =>{
    const user = await userService.getUsers();
    res.status(200).json({
        success: true,
        data: user
    });
};

const createUser = async (req, res) => {
 
    const user = await userService.createUser(req.body); //req.boy aciona os dados que vierem de data
 
    res.status(201).json({
        success: true,
        message: 'Utilizador criado com sucesso',
        data: user
    });
};
module.exports = {getUsers, createUser}// Fucnoes que utilizaremos no route