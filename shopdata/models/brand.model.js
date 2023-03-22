
const {default: mongoose} = require("mongoose");

const BrandSchema = new mongoose.Schema({
    BrandName: String
},
    {collection: "Brands" , timestamps: true}
);

const Brands = mongoose.model("brands" , BrandSchema);

module.exports = Brands; 