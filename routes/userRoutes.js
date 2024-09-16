const exppress = require("express");
const { signUp, logIn } = require("../controller/userController")


const userRoute = exppress.Router();

userRoute.post("/signup", signUp);

userRoute.post("/login", logIn);

module.exports = userRoute;