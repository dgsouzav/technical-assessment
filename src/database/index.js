const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dgsouzav:diogo21@cluster0.batqn.mongodb.net/ozmap?retryWrites=true&w=majority')// { useMongoClient: true}); //Uso de parâmetro
mongoose.Promise = global.Promise;

module.exports = mongoose;