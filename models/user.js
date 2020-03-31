const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String },
    surname: { type: String },
    email: { type: String },
    password: { type: String },
    token: { type: String } // tylko w celach pogladwocyh - niebezpieczne w praktyce
});

module.exports = mongoose.model('User', userSchema)