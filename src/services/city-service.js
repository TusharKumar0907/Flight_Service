//services use repositories to interact with database
//here we write business logic

const  { CityRepository } = require('../repositories');

//accessing the constructor of  CityRepositry

const cityRepository = new CityRepository();

async function createCity(data) {
    try{
        const city = await cityRepository.create(data);
        return city;
    } catch(error) {
        throw error;
    }
}


async function getALLCity(data) {
    try{
        const city = await cityRepository.getAll(data);
        return city;
    } catch(error) {
        throw error;
    }
}

async function deleteCity(data) {
    try{
        const city = await cityRepository.destroy(data);
        return city;
    } catch(error) {
        throw error;
    }
}

async function getbyIDCity(data) {
    try{
        const city = await cityRepository.get(data);
        return city;
    } catch(error) {
        throw error;
    }
}




module.exports = {
    createCity,
    getALLCity,
    deleteCity,
    getbyIDCity
}