

const bcrypt = require('bcrypt');
const saltRounds = 3;
const myKey = "123456^^!'_'"

const jwt = require('jsonwebtoken')


const User = require('../models/user.model');

exports.getAll = async (req, res) => {
    const { user } = req;

    if (!user) {
        res.status(500).send({ status: false, message: "User not found" });
        return;
    }

    const result = await User.find({});

    if (result) {
        res.status(200)
            .send({ status: true, result });
        return;
    } else {
        res.status(500).send({ status: false, message: "No user in your database" });
    };
};

exports.get = async (req, res) => {
    const { _id } = req.params;
    const { user } = req;

    if (!user) {
        res.status(500).send({ status: false, message: "User not found" });
        return;
    }

    const result = await User.findById({ _id });

    if (result) {
        res.status(200).send({ status: true, result });
        return;
    } else {
        res.status(500).send({ status: false, message: 'No user on ur database' });
        return;
    }
};

exports.create = async (req, res) => {
    const { user } = req;

    if (!user) {
        res.status(500).send({ status: false, message: "User not found" });
        return;
    }

    const result = await User.create(req.body);

    if (result) {
        res.status(200).send({ status: true, result });
        return;
    } else {
        res.status(500).send({ status: false, message: "no user in ur database" });
        return;
    };
};

exports.delete = async (req, res) => {
    const { _id } = req.params;
    const { user } = req;

    if (!user) {
        res.status(500).send({ status: false, message: "User not found" });
        return;
    };

    const result = await User.findByIdAndDelete({ _id });

    if (result) {
        res.status(200).send({ status: true, result });
        return;
    } else {
        res.status(500).send({ status: false, message: 'user not found' });
        return;
    };
};

exports.uptade = async (req, res) => {
    const { _id } = req.params;
    const { user } = req;

    if (!user) {
        res.status(500).send({ status: false, messgae: "User not found" });
        return;
    };

    const result = await User.findByIdAndUpdate({ _id }, req.body);

    if (result) {
        res.status(200).send({ status: true, result });
        return;
    } else {
        res.status(500).send({ status: false, message: "error" });
        return;
    };
};

exports.register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(500).send({ status: false, message: "Medeelelee buren oruulna uu" });
        return;
    };
    const hashedPass = await bcrypt.hash(password, 10);

    if (hashedPass) {
        const newUser = new User({
            email, password: hashedPass
        });

        const result = await newUser.save();

        if (result) {
            res.status(200).send({ status: true, message: "amjilttai hadgalagdlaa" });
            return;
        } else {
            res.status(500).send({ status: false, message: "hadgalahad aldaa garlaa" });
            return;
        }
    } else {
        res.status(500).send({
            status: false, message: "Password encrypt hiigeegu bn "
        });
        return;
    };
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(500).send({ status: false, message: "Medeelel dutuu baina" });
        return;
    };

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET_KEY, { expiresIn: "2d" })

        res.status(200).send({ status: true, message: "Success", token });
        return;
    } else {
        res.status(500).send({ status: false, message: "User oldsongui , nuuts ug taarahgui baina" });
        return;
    };
};
