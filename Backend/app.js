const express    = require('express');//Importe Express
const bodyParser = require('body-parser');//Transforme le corp de la requette en JSON (objet utilisable)
const mongoose   = require('mongoose');//Importe MongoDB
const path       = require('path');
const cors       = require('cors');//Installation de CORS 

//Communique avec le dossier routes
const sauceRoutes = require('./routes/sauce');
const userRoutes  = require('./routes/user');

//Connexion à MongoDB
mongoose.connect('mongodb+srv://yannis:Jemappelle95@cluster0-olomx.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(cors());


app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));//Image (IMPORTANT)
//Communique avec le front
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);



module.exports = app;

