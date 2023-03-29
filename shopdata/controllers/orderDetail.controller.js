

const OrderDet = require('../models/orderDetails.model');

exports.getAll = async (req, res) => {
    try {
        const result = await OrderDet.find({}).populate({ path: "productIds", select: "_id productName price quantity" });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.get = async (req, res) => {
    const { _id } = req.params
    try {
        const result = await OrderDet.findById({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.update = async (req, res) => {
    const { _id } = req.params
    try {
        const result = await OrderDet.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.delete = async (req, res) => {
    const { _id } = req.params
    try {
        const result = await OrderDet.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.create = async (req, res) => {
    try {
        const result = await OrderDet.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

