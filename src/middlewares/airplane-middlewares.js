const { StatusCodes } = require('http-status-codes');

function validateCreateRequest(req, res, next) {
   
    if(!req.body.modelNumber) {
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json({
                     success:false,
                     message: "not done",
                     error:"bad request"
                    })
    }

    if(!req.body.capacity) {
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json({
                     success:false,
                     message: "not done",
                     error:"bad request"
                    })
    }

    next();   //next middlewares here the next middlewares is going to be controller only

}

module.exports = {
    validateCreateRequest
}