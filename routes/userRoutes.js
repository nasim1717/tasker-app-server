const exppress = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../schemas/userSchema");
const User = mongoose.model("User", userSchema);


const userRoute = exppress.Router();

userRoute.post("/signup", (req, res) => {

});

userRoute.post("/login", (req, res) => {

});

module.exports = userRoute;