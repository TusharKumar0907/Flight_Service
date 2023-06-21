const info = require('./info_controller');

module.exports = {
    infoController: info,
    AirplaneController: require('./airplane-controller'),
    CityController: require('./city-controller')
};