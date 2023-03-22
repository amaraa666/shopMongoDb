
const {default: mongoose} = require('mongoose');

const CategorySchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        unique: true
    }
},
    {collection: "Category" , timestamps: true}
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;