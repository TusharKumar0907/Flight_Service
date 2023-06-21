//add a airplane, remove a airplane, update a airplane, get a plane


// whenever there is a simple crud we will do just this
const CrudRepository = require('./crud-repository');

const { City } = require('../models');


class CityRepository extends CrudRepository {

    constructor() {
        //using the super we can actually call the constructor of the parent class
        super(City);
    }
}



module.exports = CityRepository;