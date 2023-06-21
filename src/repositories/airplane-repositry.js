//add a airplane, remove a airplane, update a airplane, get a plane


// whenever there is a simple crud we will do just this
const CrudRepository = require('./crud-repository');

const { Airplane } = require('../models');


class AirplaneRepository extends CrudRepository {

    constructor() {
        //using the super we can actually call the constructor of the parent class
        super(Airplane);
    }
}



module.exports = AirplaneRepository;