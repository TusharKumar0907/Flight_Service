const express = require('express');

const { FlightController } = require('../../controllers');

const router = express.Router();

//  /api/v1/flight  (post request)
router.post('/', FlightController.CreateFlight);

//  /api/v1/flight  (get request)
router.get('/', FlightController.getALLFlight);

//  /api/v1/flight/id  (delete request)
router.delete('/:id', FlightController.deleteFlight);

//  /api/v1/flight/id  (get by id request)
router.get('/:id', FlightController.getbyIDFlight);

// /api/v1/flight/id/seats PATCH
router.patch('/:id/seats', FlightController.updateSeats);


module.exports = router;

