

const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
    try {
        const result = await Order.find({}).populate({ path: "UserId", select: '_id userName passworrd email' });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.get = async (req, res) => {
    const { _id } = req.body;
    try {
        const result = await Order.findById({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.delete = async (req, res) => {
    const { _id } = req.body;
    try {
        const result = await Order.findByIdAnddelete({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.create = async (req, res) => {
    try {
        const result = await Order.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.update = async (req, res) => {
    const { _id } = req.body;
    try {
        const result = await Order.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};