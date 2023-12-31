const info = require('./info_controller');

module.exports = {
    infoController: info,
    AirplaneController: require('./airplane-controller'),
    CityController: require('./city-controller'),
    AirportController: require('./airport-controller'),
    FlightController: require('./flight-controller')
};