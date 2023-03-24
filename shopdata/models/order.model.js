
const { default: mongoose } = require('mongoose');

const OrderSchema = new mongoose.Schema({
    UserId: {
        type: String,
        ref: "user"
    },
    totalPrice: Number,
    requiredDate: Date,
    shippedDate: Date,
    status: {
        type: String,
        enum: ["Shipped", 'in Process', "On Hold ", 'Cancelled']
    },

},
    { collection: "Order", timestamps: true }
);