const express = require('express');

const { CityController } = require('../../controllers');

const router = express.Router();


//  /api/v1/airplanes

// router.post('/', AirplaneController.CreateAirplane);

//include the middlewares as well in order to check whether the request is valid or not

//  /api/v1/city  (post request)
router.post('/', CityController.CreateCity);

//  /api/v1/city  (get request)
router.get('/', CityController.getALLCity);

//  /api/v1/city/id  (delete request)
router.delete('/:id', CityController.deleteCity);

//  /api/v1/city/id  (get by id request)
router.get('/:id', CityController.getbyIDCity);


module.exports = router;
