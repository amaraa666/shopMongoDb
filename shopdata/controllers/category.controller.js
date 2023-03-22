

const fs = require('fs');
const uuid = require('uuid');

const file = process.cwd() + "/data/category.json"
const Category = require("../models/category.model");

exports.getAll = async (req, res) => {
    try{
        const result = await Category.find({});
        res.json({status: true , result});
    }catch(err){
        res.json({status: false , message: err});
    }
};

exports.get = async (req, res) => {
    const { _id } = req.params;
    try{
        const result = await Category.findById({_id});
        res.json({status: true , result});
    }catch(err){
        res.json({status: false , message: err});
    };
};

exports.uptade = async (req, res) => {
    const { _id } = req.params;
    try{
        const result = await Category.findByIdAndUpdate({_id} , req.body);
    }catch(err){
        res.json({status: false , message: err});
    };
};

exports.create = async (req, res) => {
    try{
        const result = await Category.create(req.body);
    }catch(err){
        res.json({status:false , message: err});
    };
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try{
        const result = await Category.findByIdAndDelete({_id})
        res.json({status: true , result})
    }catch(err){
        res.json({status: false , message: err});
    };
};