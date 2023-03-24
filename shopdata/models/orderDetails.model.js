

const { default: mongoose } = require('mongoose');

const OrderDetSchema = new mongoose.Schema({
    orderId: {
        type: String,
        ref: "Order"
    },
    shipStatus: {
        type: String,
        enum: ["", "", ""]
    }
},
    { collection: "OrderDetail", timestamps: true }
);