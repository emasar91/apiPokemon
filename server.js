const Koa = require('koa')
const cors = require('@koa/cors')
const morgan = require('koa-morgan')
const bodyParser = require('koa-body')
const mount = require('koa-mount')

const errorHandler = require('./src/errors/errorHandler')

/* API Routers */
const apiRouters = require('./src/public/routers')

/**
 * Koa app (client + server)
 */
const app = new Koa()

/**
 * Koa server
 */
const server = new Koa()
const config = require('./src/init/config')()

/**
 * Services
 */
server.use(bodyParser())
server.use(errorHandler)
server.use(morgan('dev'))
server.use(cors())

server.use(apiRouters.routes())

app.use(mount('/api', server)) // You will access the server app from here

app.listen(config.port)
console.log('\n==============================')
console.log(`
      App  : ${config.appName}
      Port : ${config.port}
    `)
console.log('==============================\n')
