//add a airplane, remove a airplane, update a airplane, get a plane


// whenever there is a simple crud we will do just this
const CrudRepository = require('./crud-repository');

const { Flight } = require('../models');


class FlightRepository extends CrudRepository {

    constructor() {
        //using the super we can actually call the constructor of the parent class
        super(Flight);
    }

    async getAllFlights(filter) {
        console.log(filter);
        const response = await Flight.findAll({
            where: filter
        });
        return response;
    }
}



module.exports = FlightRepository;