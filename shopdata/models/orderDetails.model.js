

const { default: mongoose, Schema } = require('mongoose');

const OrderDetSchema = new mongoose.Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    productIds: [{
        type: Schema.Types.ObjectId,
        ref: 'products'
    }],
    requiredDate: Date,
    totalPrice: Number
},
    { collection: "OrderDetail", timestamps: true }
);

const OrderDet = mongoose.model('OrderDet', OrderDetSchema);
module.exports = OrderDet;