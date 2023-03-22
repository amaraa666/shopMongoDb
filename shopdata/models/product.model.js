const { default: mongoose , Schema } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: String,
    categoryIds: [{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }],
    price: Number,
    desc: String,
    sale: Number,
    color: String,
    isTrending: {
        type: Boolean,
        default: false
    },
    brands: [{
        type: Schema.Types.ObjectId ,
        ref: "Brand"
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