'use strict';

const Pokemon = require('../../models/Pokemon')

module.exports = async function getPokemonByName(name) {

    const pokemon = await Pokemon.findOne({ name })
        .populate('abilitie')
        .lean()
        .exec()

    if (!pokemon) {
        const error = new Error(`Not found Pokemon ${name}`)
        error.status = 404
        throw error
    }
    return {
        body: pokemon,
        status: 200
    }
}