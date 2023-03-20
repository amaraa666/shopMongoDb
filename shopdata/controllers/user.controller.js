

const fs = require('fs');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 3;
const myKey = "123456^^!'_'"

const file = process.cwd() + '/data/users.json';

const User = require('../models/user.model');

exports.getAll = (req, res) => {

    fs.readFile(file, 'utf-8', (readErr, data) => {
        const myData = JSON.parse(data)

        if (readErr) {
            return res.json({ status: false, message: readErr });
        }

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            }

            return res.json({ status: true, result: myData });
        })
    })
};

exports.get = async (req, res) => {
    const { _id } = req.body;
    const result = await User.find({_id} , null);
    if(result.length <= 0){
        res.json({status: false , message: 'amjilttgui'})
    }
    res.json({status: true , result});
};

exports.create = async (req, res) => {
    const body = req.body;
    console.log(body)
    const newUser = new User(body);
    const result = await newUser.save();
    res.json({ status: true, data: result });
};

exports.delete = async (req, res) => {
    const { _id } = req.body;
    const result = await User.deleteOne({_id});
    res.json({status: true , message: "amjilttai ustgagdlaa"});
};

exports.uptade = async (req, res) => {
    const { _id } = req.body;
    const result = await User.updateOne({_id},{$set: {firstName: "Amar"}});
    res.json({status: true , message: "amjilttai zaslaa"});
};

exports.login = (req, res) => {
    const { signIn } = req.body;

    if (!signIn.userName || !signIn.password)
        return res.json({ status: false, message: 'Medeelel dutuu baina' });


    fs.readFile(file, 'utf-8', async (readErr, data) => {
        if (readErr) {
            return ({ status: false, message: readErr });
        }

        const myData = data ? JSON.parse(data) : [];

        let user;
        for (let i = 0; i < myData.length; i++) {
            if (signIn.userName == myData[i].signIn.userName) {
                const decrypt = await bcrypt.compare(signIn.password + myKey, myData[i].signIn.password);
                console.log("suu", await bcrypt.compare(signIn.password + myKey, myData[i]?.signIn.password))
                console.log(decrypt);
                if (decrypt) {
                    user = {
                        userID: myData[i].userID,
                        email: myData[i].details.email,
                        lastName: myData[i].details.lastName,
                        firstName: myData[i].details.firstName
                    };
                    break;
                };
            };
        };
        console.log(user);
        if (user) {
            return res.json({ status: true, result: user })
        } else {
            return res.json({ status: false, message: 'Tanii ner esvel nuuts ug buruu baina' })
        }
    });
};
