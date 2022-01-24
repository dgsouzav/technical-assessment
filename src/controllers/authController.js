const express = require('express');
// buscando o express 
const User = require('../models/User');
// buscar o model de user  
const router = express.Router();
// buscando a classe router do express para definir rotas
router.post('/register', async (req, res) => {
    // definindo rota de cadastro
    try {
        const user = await User.create(req.body);
        // criar novo usuario quando for chamado, 
        // todos parametros estao no req.body
        return res.send({ user });
        // retorno = true
    } catch (err) {
        return res.status(404).send({ error: 'Falha de registro'});
        // catch para retorar qualquer tipo de erros    
    }
});

module.exports = app => app.use('/auth', router);
// receber parametro do app, e retornar o app.use definindo uma rota