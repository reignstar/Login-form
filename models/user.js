const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
     number: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
    }
}, {timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;