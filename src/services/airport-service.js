const  { AirportRepository } = require('../repositories');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    console.log(" Service ", data);
    try{
        const airport = await airportRepository.create(data);
        return airport;
    } catch(error) {
        throw error;
    }
}

async function getAllAirport(data) {
    try{
        const airport = await airportRepository.getAll(data);
        return airport;
    } catch(error) {
        throw error;
    }
}

async function deleteAirport(data) {
    try{
        const airport = await airportRepository.destroy(data);
        return airport;
    } catch(error) {
        throw error;
    }
}

async function getbyIDAirport(data) {
    try{
        const airport = await airportRepository.get(data);
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