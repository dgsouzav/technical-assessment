const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err) {
        return res.status(404).send({ error: 'Falha de registro'});
    }
});

module.exports = app => app.use('/auth', router);