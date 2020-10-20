const config = require('./config')()
const winston = require('winston')

const logger = winston.createLogger({
  level: config.logLevel || 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  defaultMeta: {},
  transports: []
})
logger.add(
  new winston.transports.Console({
    format: winston.format.simple()
  })
)
module.exports = logger