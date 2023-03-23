const { default: mongoose, Schema } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: String,
    categoryIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    price: Number,
    desc: String,
    sale: Number,
    color: String,
    isTrending: {
        type: Boolean,
        default: false
    },
    brandIds: [{
        type: Schema.Types.ObjectId,
        ref: "Brands"
    }],
    isFav: {
        type: Boolean,
        default: false
    },
    imgs: [String],
    quantity: Number
},
    { collection: 'products', timestamps: true }
);

const Products = mongoose.model('products', ProductSchema);  // ene products yu vee 

module.exports = Products;