require('dotenv').config();
const app = require('./scr/app');
const PORT = process.env.PORT || 3000;

app.listem(PORT, ()=>{
    console.log('Servidor iniciado na porta 3000');
});