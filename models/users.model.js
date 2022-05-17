const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{
        type: String,
    required: true,
    unique: true,
    },
    lastname:{
        type: String,
    required: true,
    unique: true,
    },
username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
},
email: {
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
required: true,
unique: true,
trim: true,
minlength: 4
},
}, {
timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;