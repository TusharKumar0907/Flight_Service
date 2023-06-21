const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({       // response.status - > it will set the status to whatever the code is and then it is going set the json function and send to client
        success : true,
        message:'API is live',
        error:{},
        data:{}
    });
}


module.exports = {
    info: info
}