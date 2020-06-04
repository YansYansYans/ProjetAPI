const bcrypt = require('bcryptjs');//Fonction de hachage 
const jwt    = require('jsonwebtoken');

const User   = require('../models/user');

const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//Fonction REGEX
//S'inscrire
exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password)
    if (!email_regex.test(email)) {
        return res.status(400).json({ message: 'Email invalide' });
    } else {
        const count = password.length;
        if (count >= 8) {//Ordonne 8 carractère minimaux pour le mot de passe sinon refusé
            bcrypt.hash(password, 10)//Hache le mdp 10 fois
                .then(hash => {
                    const user = new User({
                        email: email,
                        password: hash
                    });
                    user.save()
                        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                        .catch(error => res.status(400).json({ error }));
                })
                .catch(error => res.status(500).json({ error }));
        } else {
            res.status(401).json({ message: 'Votre mot de passe doit au moins faire 8 caractères' });
        }
    }
};

//Se connecter
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)//Bcrypt compare le mdp de connexion et celui d'inscription
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Mot de passe incorrect !' });
                    }
                    res.status(201).json({
                        message: 'Connexion réussie!',
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET', 
                            { expiresIn: '24h' }//L'utilisateur doit se reconnecter toute les 24H
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

