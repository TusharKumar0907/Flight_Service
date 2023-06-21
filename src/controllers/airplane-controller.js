// it connects with service

const { response } = require("express");
const { AirplaneService } = require("../services");
const { StatusCodes } = require('http-status-codes');




//  POST : /airplanes 
//  req-body {modelNumber: 'airbus320', capacity: 200}
 
async function CreateAirplane(req, res) {

try{
    // console.log(req.body);
    const airplane = await AirplaneService.CreateAirplane({
        modelNumber: req.body.modelNumber,
        capacity: req.body.capacity
    });
    return res
    .status(StatusCodes.CREATED)
    .json({
        success:true,
        message: "done done",
        data:airplane
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



async function getALLAirplane(req, res) {

    try{
        // console.log(req.body);
        const airplanes = await AirplaneService.getALLAirplane();
        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "see see",
            data:airplanes
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



async function deleteAirplane(req, res) {

    try{
        // console.log(req.body);
        const airplanes = await AirplaneService.deleteAirplane(req.params.id);
        
        if( !airplanes ) {
            return res
            .status(StatusCodes.NOT_FOUND)
            .json({
                message:"airplane not found"
            });
        }
        
        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "delete ho gya",
            data:airplanes
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


async function getbyIDAirplane(req, res) {

    try{
        // console.log(req.body);
        const airplanes = await AirplaneService.getbyIDAirplane(req.params.id);

        if( !airplanes ) {
            return res
            .status(StatusCodes.NOT_FOUND)
            .json({
                message:"airplane not found"
            });
        }

        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "dekhlo",
            data:airplanes
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
    CreateAirplane,
    getALLAirplane,
    deleteAirplane,
    getbyIDAirplane
}


