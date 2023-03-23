



const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
    try {
        const result = await Product.find({}).populate({ path: "categoryIds", select: "_id  CategoryName" }).populate({ path: "brandIds", select: "_id  brandName" });
        console.log(result)
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.get = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Product.findById({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.uptade = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Product.findByIDAndUpdate({ _id }, req.body)
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const result = await Product.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Product.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};