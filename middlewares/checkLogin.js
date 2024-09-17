const jwt = require("jsonwebtoken");
const checkLogin = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { name, email, userId } = decoded;
        req.name = name;
        req.email = email;
        req.userId = userId;
        next();
    } catch (err) {
        res.status(401).json({
            status: false,
            message: "Unauthorized user!"
        })
    }
}

module.exports = checkLogin;