
const { default: mongoose } = require("mongoose");

const BrandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        unique: true
    }
},
    { collection: "Brands", timestamps: true }
);

const Brands = mongoose.model("Brands", BrandSchema);

module.exports = Brands; 