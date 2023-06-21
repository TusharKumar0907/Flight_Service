// it connects with service

const { response } = require("express");
const { CityService } = require("../services");
const { StatusCodes } = require('http-status-codes');




//  POST : /airplanes 
//  req-body {modelNumber: 'airbus320', capacity: 200}
 
async function CreateCity(req, res) {

try{
    // console.log(req.body);
    const city = await CityService.createCity({
        name: req.body.name
    });
    return res
    .status(StatusCodes.CREATED)
    .json({
        success:true,
        message: "done done",
        data:city
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



async function getALLCity(req, res) {

    try{
        // console.log(req.body);
        const cities = await CityService.getALLCity();
        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "see see",
            data:cities
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



async function deleteCity(req, res) {

    try{
        // console.log(req.body);
        const cities = await AirplaneService.deleteCity(req.params.id);
        
        if( !cities ) {
            return res
            .status(StatusCodes.NOT_FOUND)
            .json({
                message:"city not found"
            });
        }
        
        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "delete ho gya",
            data:cities
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


async function getbyIDCity(req, res) {

    try{
        // console.log(req.body);
        const city= await AirplaneService.getbyIDCity(req.params.id);

        if( !city ) {
            return res
            .status(StatusCodes.NOT_FOUND)
            .json({
                message:"city not found"
            });
        }

        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "dekhlo",
            data:city
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
    CreateCity,
    getALLCity,
    deleteCity,
    getbyIDCity
}


