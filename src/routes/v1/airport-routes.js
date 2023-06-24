const express = require('express');

const { AirportController } = require('../../controllers');

const router = express.Router();

//  /api/v1/airport  (post request)
router.post('/' , AirportController.CreateAirport);

//  /api/v1/airport  (get request)
router.get('/', AirportController.getAllAirport);

//  /api/v1/airport/id  (delete request)
router.delete('/:id', AirportController.deleteAirport);

//  /api/v1/airport/id  (get by id request)
router.get('/:id', AirportController.getbyIDAirport);

module.exports = router;
