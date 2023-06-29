//add a airplane, remove a airplane, update a airplane, get a plane
const { Sequelize } = require('sequelize');

const db = require('../models');
// whenever there is a simple crud we will do just this
const CrudRepository = require('./crud-repository');

const { Flight, Airplane, Airport, City } = require('../models');
const { addRowLockOnFlights } = require('./queries');

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

    async updateRemainingSeats(flightId, seats, dec = true) {
        const transaction = await db.sequelize.transaction();
        try {
            await db.sequelize.query(addRowLockOnFlights(flightId));
            const flight = await Flight.findByPk(flightId);
            if(dec) {
                console.log(dec);
                await flight.decrement('totalSeats', {by: seats}, {transaction: transaction});
            } else {
                // console.log(dec);
                await flight.increment('totalSeats', {by: seats}, {transaction: transaction});
            }
            await transaction.commit();
            return flight;
        } catch(error) {
            await transaction.rollback();
            throw error;
        }
        return flight;
    }


}


module.exports = FlightRepository;