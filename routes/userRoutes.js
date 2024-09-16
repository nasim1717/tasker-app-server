const exppress = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../schemas/userSchema");
const User = mongoose.model("User", userSchema);


const userRoute = exppress.Router();

userRoute.post("/signup", async (req, res) => {
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
            message: "Signup failed!"
        })
    }
});

userRoute.post("/login", (req, res) => {

});

module.exports = userRoute;