const express = require('express');
const bodyParser = require('body-parser');//Transforme le corp de la requette en JSON (objet utilisable)
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/sauce');

//Connexion à MongooseDB
mongoose.connect('mongodb+srv://yannis:Jemappelle95@cluster0-olomx.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//Ajout de HeaderWhere pour que les deux serveurs communiquent
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

module.exports = app;