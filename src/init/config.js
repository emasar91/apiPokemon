const Database = require('./database')
const config = require('../../config/config')
module.exports = function readConfig() {
  Database.connect()
  return {
    appName: config.NAME,
    port: config.PORT,
  }
}
