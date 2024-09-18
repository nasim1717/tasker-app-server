function notFound(req, res, next) {
    res.status(404).json({
        status: false,
        message: "This route is notfound!"
    });
}

function defaultError(err, req, res, next) {
    res.status(500).json({ message: "Internal server Error", status: fasle });
}

module.exports = {
    notFound,
    defaultError
};