'use strict'

const httpStatus = require('http').STATUS_CODES

module.exports = async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    const statusCode = err.status && httpStatus[err.status]
      ? err.status
      : 500

    ctx.status = statusCode
    ctx.body = {
      error: err.name,
      message: err.message
    }
  }
}
