const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: String,
    categoryIds: [String],
    price: Number,
    desc: String,
    sale: Number,
    color: String,
    isTrending: {
        type: Boolean,
        default: false
    },
    isFav: {
        type: Boolean,
        default: false
    },
    imgs: [String],
    quantity: Number
},
    { collection: 'products', timestamps: true }
);

const Products = mongoose.model('products', ProductSchema);

module.exports = Products;