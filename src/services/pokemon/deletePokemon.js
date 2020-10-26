'use strict'

const Pokemon = require('../../models/Pokemon')

module.exports = async function deletePokemon(name) {
    const pokemon = await Pokemon.findOne({ name })
        .lean()
        .exec()

    if (!pokemon) {
        const error = new Error(`Not found pokemon "${name}"`)
        error.status = 404
        throw error
    }
    await Pokemon.deleteOne({ name })
        .lean()
        .exec()

    return {
        body: { status: 'deleted' },
        status: 200
    }
}
