const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
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

module.exports = User;