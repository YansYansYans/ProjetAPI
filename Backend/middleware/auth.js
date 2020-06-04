const jwt = require('jsonwebtoken');//Création du TOKEN + envoi au Front

module.exports = (req, res, next) => {
    try {
        const token        = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId       = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable !';
        } else {
            next();
        }
    } catch {
        res.status(401).json({ error: new Error('Requete non authentifiée !')});
    }
};

