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
        isAdmin: {
            type: Boolean,
            default: false
        },
        order: [String],
        favItem: [String]
    },
    { collection: 'user', timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
