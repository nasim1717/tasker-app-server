const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../schemas/userSchema");
const User = mongoose.model("User", userSchema);

async function signUp(req, res) {
    try {
        const existUser = await User.findOne({ email: req.body.email });
        if (existUser) {
            res.status(404).json({
                status: false,
                message: "Already user exist!"
            })
        } else {
            const hashpassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashpassword
            });
            const resultNewUser = await newUser.save();
            res.status(200).json({
                status: true,
                message: "Successfully Signup"
            });
        }


    } catch (err) {
        res.status(500).json({
            error: err,
            status: false,
            message: "Signup failed!"
        })
    }
}


async function logIn(req, res) {
    try {
        const findUser = await User.findOne({ email: req.body.email });

        if (findUser) {
            const isValidPassword = await bcrypt.compare(req.body.password, findUser.password);
            if (isValidPassword) {
                // token genereate
                const token = jwt.sign({
                    name: findUser?.name,
                    email: findUser?.email,
                }, process.env.JWT_SECRET, {
                    expiresIn: "1h"
                });
                res.status(202).json({
                    status: true,
                    message: "Login successful",
                    data: findUser,
                    accessToken: token,
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: "Invalid password"
                });
            }
        } else {
            res.status(404).json({
                status: false,
                message: "User not found!"
            });
        }

    } catch (err) {
        res.status(500).json({
            error: err,
            status: false,
            message: "Login failed!"
        })
    }
}


module.exports = {
    signUp,
    logIn
}