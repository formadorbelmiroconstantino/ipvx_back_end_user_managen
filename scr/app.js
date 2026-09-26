const express = require('express');
const userRoute = require('./routes/user.route');
const app = express();

app.use(express.json());

app.use('/api/v1/users', userRoute);

module.exports = app;
