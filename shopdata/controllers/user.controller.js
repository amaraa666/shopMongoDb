

const bcrypt = require('bcrypt');
const saltRounds = 3;
const myKey = "123456^^!'_'"


const User = require('../models/user.model');

exports.getAll = async (req, res) => {
    try {
        const result = await User.find({});
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.get = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await User.findById({ _id });
        res.json({ staus: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.create = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await User.findByIdAndDelete({ _id });
        console.log(result)
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.uptade = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await User.findByIdAndUpdate({ _id }, req.body);
        res.json({ stsus: true, result })
    } catch (err) {
        res.json({ status: false, message: err });
    }
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
