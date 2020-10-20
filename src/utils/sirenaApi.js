const request = require('request')
const config = require('../init/config')()

const endpoint = config.sirenaUrl

class SirenaApi {
  static async getStatus () {
    const req = {
      method: 'GET',
      url: `${endpoint}/status`,
      json: true
    }
    return requestApi(req)
  }

  // The prospectId provided will be Cotti's ExternalId
  static async getProspect (prospectId, apiKey) {
    const req = {
      method: 'GET',
      url: `${endpoint}/v1/prospect/${prospectId}?api-key=${apiKey}`,
      json: true
    }
    return requestApi(req)
  }

  static async sendNote (prospectId, apiKey, content) {
    const req = {
      method: 'POST',
      url: `${endpoint}/v1/prospect/${prospectId}/interactions?api-key=${apiKey}`,
      json: true,
      body: {
        type: 'note',
        content
      }
    }
    return requestApi(req)
  }
}

async function requestApi (opts) {
  return new Promise((resolve, reject) => {
    request(opts, (err, response) => {
      if (err) {
        reject(err)
      } else if (response.statusCode >= 500) {
        const providerError = new Error('Provider service is offline')
        providerError.request = opts
        providerError.statusCode = response.statusCode
        providerError.response = response.body
        reject(providerError)
      } else if (response.statusCode >= 400) {
        const badRequestError = new Error(
          'Could not perform operation against provider'
        )
        badRequestError.request = opts
        badRequestError.statusCode = response.statusCode
        badRequestError.response = response.body
        reject(badRequestError)
      } else {
        resolve(response.body)
      }
    })
  })
}

module.exports = SirenaApi
