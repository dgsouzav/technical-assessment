const mongoose = require('mongoose');
// apos instalar o mongoose, defina uma constante 
mongoose.connect('mongodb+srv://dgsouzav:diogo21@cluster0.batqn.mongodb.net/ozmap?retryWrites=true&w=majority')// { useMongoClient: true}); //Uso de parâmetro
// conexao com o banco 
mongoose.Promise = global.Promise;
// classe de promise que o mongoose irá usar
module.exports = mongoose;
// exportação de dados do mongoose