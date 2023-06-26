//add a airplane, remove a airplane, update a airplane, get a plane


// whenever there is a simple crud we will do just this
const CrudRepository = require('./crud-repository');

const { Flight } = require('../models');


class FlightRepository extends CrudRepository {

    constructor() {
        //using the super we can actually call the constructor of the parent class
        super(Flight);
    }
   
    //get flights on the basis of query that is given 
    async getAllFlights(filter) {
        console.log(filter);
        const response = await Flight.findAll({
            where: filter
        });
        return response;
    }
}



module.exports = FlightRepository;