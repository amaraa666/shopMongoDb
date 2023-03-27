

const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
    const {user} = req;

    if(!user){
        res.status(500).send({status: false , message: "user not found"})
        return;
    };

    const result = await Order.find({}).populate({path: 'UserId' , select: "_id userName password"});

    if(result){
        res.status(200).send({status: true , result});
        return;
    }else{
        res.status(500).send({status: false , message: 'no order in your db'});
        return;
    };
};

exports.get = async (req, res) => {
    const { _id } = req.body;
    const {user} = req;

    if(!user){
        res.status(500).send({status: false , message: 'user not found'}).populate({path: "UserId" , select: "_id username password"});
        return;
    };

    const result = await Order.findById({_id});

    if(result){
        res.status(200).send({status: true , result});
        return;
    }else{
        res.status(500).send({status: false , message: 'order not found'});
        return;
    };
};

exports.delete = async (req, res) => {
    const { _id } = req.body;
    const {user} = req;

    try {
        if(user){
            const result = await Order.findByIdAnddelete({ _id });
            res.json({ status: true, result });
        };
    } catch (err) {
        res.json({ status: false, message: err });
    };

    //ingej bicij bolooh esehiig asuuh?
};

exports.create = async (req, res) => {
    const {user} = req;
    try {
        if(user){
            const result = await Order.create(req.body);
            res.json({ status: true, result });
        };
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.update = async (req, res) => {
    const { _id } = req.body;
    const {user} = req;
    try {
        if(user){
            const result = await Order.findByIdAndUpdate({ _id }, req.body);
            res.json({ status: true, result });
        };
    } catch (err) {
        res.json({ status: false, message: err });
    };
};