
const express = require('express');

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');

//currently we are in v1 folder ../ now we are in routes folder ../ now we are in src folder and controller is present here only
const { infoController } = require('../../controllers');

//it helps in registration of routes and we can return this router object from anywhere and with whatever URL we want to bind this we can bind this route object
const router = express.Router();

router.use('/airplanes', airplaneRoutes);

router.use('/city', cityRoutes);

router.use('/airport', airportRoutes);

//this function that is passed as a callback is controller to actually see whether our server is alive or not , we can keep this in other folder (we are keeping this in controller) to make it more clear
router.get('/info', infoController.info);





module.exports = router;