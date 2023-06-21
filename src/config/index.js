const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    Logger: require('./logger-config') ,
    ServerConfig: require('./server-config')
};