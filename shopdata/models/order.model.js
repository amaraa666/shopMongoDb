
const { default: mongoose, Schema } = require('mongoose');

const OrderSchema = new mongoose.Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    status: {
        type: String,
        enum: ["Shipped", 'in Process', "On Hold ", 'Cancelled']
    }
},
    { collection: "Order", timestamps: true }
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;