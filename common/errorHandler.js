function notFound(req, res, next) {
    res.status(404).json({
        notfoun: "This route is notfound!"
    });
}

function defaultError(err, req, res, next) {
    res.status(500).json("Internal server Error");
}

module.exports = {
    notFound,
    defaultError
};