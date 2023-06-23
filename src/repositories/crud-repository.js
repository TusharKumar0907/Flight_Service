const { error } = require('winston');
const { Logger } = require('../config');
const { StatusCodes }   = require('http-status-codes');

//CRUD stands for create, read, update, delete something from table of database

//anything related to query will be in this only

class CrudRepository {
    
    constructor(model) {
        this.model = model;
    }

    //if we want to insert something in the table , all this thing is also available in the sequelise documentation of model(table) query
    async create(data) {
        console.log(data);
        try{
            const response = await this.model.create(data);
            // console.log(response);
            return response;
        } catch(error) {
            Logger.error('Something went wrong in crud repo in create function');
            throw error;
        }
    }

    
    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async update(id, data) { // data -> {col: value, ....}
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        })
        return response;
    }

}

module.exports = CrudRepository;