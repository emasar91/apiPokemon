'use strict';

const Pokemon = require('../../models/Pokemon')

module.exports = async function getPokemonById(_id) {

    const pokemon = await Pokemon.findOne({ order: _id })
        .populate('abilitie')
        .lean()
        .exec()

    if (!pokemon) {
        const error = new Error(`Not found Pokemon ${_id}`)
        error.status = 404
        throw error
    }
    return {
        body: pokemon,
        status: 200
    }
}