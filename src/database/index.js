// Conexão com o banco de dados MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ozmap', { useMongoClient: true}); //Uso de parâmetro
mongoose.Promise = global.Promise;

module.exports = mongoose;