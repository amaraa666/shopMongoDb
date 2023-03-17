const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        address: String,
        phoneNumber: Number,
        userName: String,
        password: String,
        isAdmin: Boolean,
        order: [String],
        favItem: [String]
    },
    { collection: 'user' }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
