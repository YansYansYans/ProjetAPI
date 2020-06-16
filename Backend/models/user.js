const mongoose        = require('mongoose');//Importe Mongoose
const uniqueValidator = require('mongoose-unique-validator');//Utilisateur Unique
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 2 * 60 * 60 * 1000;

const userSchema = mongoose.Schema({
  email   : { type: String, required: true, unique: true },
  password: { type: String, required: true },
  loginAttempts: { type: Number, required: true, default: 0 },
  lockUntil: { type: Number }
});

var reasons = userSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2
};

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

