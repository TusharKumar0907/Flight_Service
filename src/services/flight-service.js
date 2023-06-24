//services use repositories to interact with database
//here we write business logic

const  { FlightRepository } = require('../repositories');

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

async function getALLFlight(data) {
    try{
        const flight = await flightRepository.getAll(data);
        return flight;
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


module.exports = {
    createFlight,
    getALLFlight,
    deleteFlight,
    getbyIDFlight
}