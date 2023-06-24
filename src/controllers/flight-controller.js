// it connects with service

const { response } = require("express");
const { FlightService } = require("../services");
const { StatusCodes } = require('http-status-codes');



//  POST : /airplanes 
//  req-body {name : city}
 
async function CreateFlight(req, res) {

try{
    // console.log(req.body);
    const flight = await FlightService.createFlight({
        flightNumber: req.body.flightNumber,
        airplaneId: req.body.airplaneId,
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        price: req.body.price,
        boardingGate: req.body.boardingGate,
        totalSeats: req.body.totalSeats
    });
    return res
    .status(StatusCodes.CREATED)
    .json({
        success:true,
        message: "done done",
        data:flight
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



async function getALLFlight(req, res) {

    try{
        // console.log(req.body);
        const flight = await FlightService.getALLFlight(req.data);
        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "see see",
            data:flight
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



async function deleteFlight(req, res) {

    try{
        // console.log(req.body);
        const flight = await FlightService.deleteFlight(req.params.id);
        
        if( !flight ) {
            return res
            .status(StatusCodes.NOT_FOUND)
            .json({
                message:"flight not found"
            });
        }
        
        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "delete ho gya",
            data:flight
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


async function getbyIDFlight(req, res) {

    try{
        // console.log(req.body);
        const flight = await FlightService.getbyIDFlight(req.params.id);

        if( !flight ) {
            return res
            .status(StatusCodes.NOT_FOUND)
            .json({
                message:"flight not found"
            });
        }

        return res
        .status(StatusCodes.OK)
        .json({
            success:true,
            message: "dekhlo",
            data:flight
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
    CreateFlight,
    getALLFlight,
    deleteFlight,
    getbyIDFlight
}


