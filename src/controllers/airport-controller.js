// it connects with service

const { response } = require("express");
const { AirportService } = require("../services");
const { StatusCodes } = require('http-status-codes');




//  POST : /airplanes 
//  req-body {modelNumber: 'airbus320', capacity: 200}
 
async function CreateAirport(req, res) {

try{
    // console.log(req.body);
    const airport = await AirportService.createAirport({
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
        cityID: integer
    });
    return res
    .status(StatusCodes.CREATED)
    .json({
        success:true,
        message: "done done",
        data:airport
    });
} catch(error) {
    return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
        success:false,
        message: "not done",
    });
}

}



async function getAllAirport(req, res) {

    try{
        // console.log(req.body);
        const airport = await AirportService.getAllAirport();
        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "see see",
            data:airport
        });
    } catch(error) {
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success:false,
            message: "can not see",
        });
    }
    
}



async function deleteAirport(req, res) {

    try{
        // console.log(req.body);
        const airport = await AirportService.deleteAirport(req.params.id);
        
        if( !airport ) {
            return res
            .status(StatusCodes.NOT_FOUND)
            .json({
                message:"airport not found"
            });
        }
        
        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "delete ho gya",
            data:airport
        });
    } catch(error) {
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success:false,
            message: "delete nhi ho pa rha",
        });
    }
    
}


async function getbyIDAirport(req, res) {

    try{
        // console.log(req.body);
        const airport = await AirportService.getbyIDAirport(req.params.id);

        if( !airport ) {
            return res
            .status(StatusCodes.NOT_FOUND)
            .json({
                message:"airport not found"
            });
        }

        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "dekhlo",
            data:airport
        });
    } catch(error) {
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success:false,
            message: "error",
        });
    }
    
}
    
    

module.exports = {
    CreateAirport,
    getAllAirport,
    deleteAirport,
    getbyIDAirport
}


