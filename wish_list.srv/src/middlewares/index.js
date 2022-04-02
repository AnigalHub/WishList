const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next)
}

function errorCatcher(err, req, res, next){
    res.status(500).json({code: 500, msg: err.toString()})
}

module.exports = { asyncHandler, errorCatcher }