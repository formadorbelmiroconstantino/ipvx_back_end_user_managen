const userService = require('../services/user.service');//Importar o arquivos da pasta service
const getUsers = async (req, res) =>{
    const user = await userService.getUsers();
    res.status(200).json({
        success: true,
        data: user
    });
};
module.exports = {getUsers}