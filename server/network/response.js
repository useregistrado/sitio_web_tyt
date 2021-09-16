exports.success = function (req, res, message, status){
    res.status(status).send({
        error: false,
        body: message
    });
    
}

exports.error = function (req, res, message, status){
    let statusCode = status || 500;

    res.status(statusCode).send({
        error: false,
        status: status,
        body: message
    });
}