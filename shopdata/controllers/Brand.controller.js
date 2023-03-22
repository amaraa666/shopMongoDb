
const Brand = require('../models/brand.model');

exports.getAll = async (req, res) => {
    try {
        const result = await Brand.find({});
        console.log(result)
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.get = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Brand.findById({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.uptade = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Brand.findByIDAndUpdate({ _id }, req.body)
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.create = async (req, res) => {
    try {
        const result = await Brand.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Brand.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};