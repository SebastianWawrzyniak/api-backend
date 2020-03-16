const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String },
    surname: { type: String },
    email: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('User', userSchema)