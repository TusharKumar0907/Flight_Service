const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const router = express.Router();


//  /api/v1/airplanes

// router.post('/', AirplaneController.CreateAirplane);

//include the middlewares as well in order to check whether the request is valid or not

//  /api/v1/airplanes  (post request)
router.post('/', AirplaneMiddleware.validateCreateRequest , AirplaneController.CreateAirplane);

//  /api/v1/airplanes  (get request)
router.get('/', AirplaneController.getALLAirplane);

//  /api/v1/airplanes/id  (delete request)
router.delete('/:id', AirplaneController.deleteAirplane);

//  /api/v1/airplanes/id  (get by id request)
router.get('/:id', AirplaneController.getbyIDAirplane);



module.exports = router;
