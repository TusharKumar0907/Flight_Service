//services use repositories to interact with database
//here we write business logic

const  { FlightRepository } = require('../repositories');
const { Op } = require('sequelize');

//accessing the constructor of  CityRepositry

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try{
        const flight = await flightRepository.create(data);
        return flight;
    } catch(error) {
        throw error;
    }
}

async function getALLFlight(query) {
 
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00";
    // trips=MUM-DEL
    if(query.trips) {
        console.log(query.trips);
       [departureAirportId, arrivalAirportId] = query.trips.split("-"); 
       customFilter.departureAirportId = departureAirportId;
       customFilter.arrivalAirportId = arrivalAirportId;
       // TODO: add a check that they are not same
    }
    if(query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]
        }
    }
    if(query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if(query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
        }
    }
    
    try{
        const flights = await flightRepository.getAllFlights(customFilter);
        return flights;
    } catch(error) {
        throw error;
    }
}

async function deleteFlight(data) {
    try{
        const flight = await flightRepository.destroy(data);
        return flight;
    } catch(error) {
        throw error;
    }
}

async function getbyIDFlight(data) {
    try{
        const flight = await flightRepository.get(data);
        return flight;
    } catch(error) {
        throw error;
    }
}


async function updateSeats(data) {
    try {
        const response = await flightRepository.updateRemainingSeats(data.flightId, data.seats, data.dec);
        return response;
    } catch(error) {
        // console.log(error);
        throw error;
    }
}


module.exports = {
    createFlight,
    getALLFlight,
    deleteFlight,
    getbyIDFlight,
    updateSeats
}