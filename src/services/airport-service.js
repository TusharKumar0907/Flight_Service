//services use repositories to interact with database
//here we write business logic

const  { AirportRepository } = require('../repositories');

//accessing the constructor of  AirportRepositry

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try{
        const airport = await AirportRepository.create(data);
        return airport;
    } catch(error) {
        throw error;
    }
}

async function getAllAirport(data) {
    try{
        const airport = await AirportRepository.getAll(data);
        return airport;
    } catch(error) {
        throw error;
    }
}

async function deleteAirport(data) {
    try{
        const airport = await AirportRepository.destroy(data);
        return airport;
    } catch(error) {
        throw error;
    }
}

async function getbyIDAirport(data) {
    try{
        const airport = await AirportRepository.get(data);
        return airport;
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createAirport,
    getAllAirport,
    deleteAirport,
    getbyIDAirport
}