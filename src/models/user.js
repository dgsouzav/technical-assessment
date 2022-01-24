const mongoose = require('../database');
// importando mongoose
const UserSchema = new mongoose.Schema({
// definindo os campos que estao no banco na tabela de usuario
    nome: {
        type: 'string',
    },

    email: {
        type: 'string',
        lowercase: true,
    },

    idade: {
        type: 'number',
        minimum: 18,
    },

    createdAt: {
        type: 'date',
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);
// definindo o model
module.exports = User;