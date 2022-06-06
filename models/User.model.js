const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    location: String,
    Email: String,
    number: Number,
    password: String,
});

module.exports = mongoose.model('user', UserSchema)