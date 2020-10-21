'use strict';

const Pokemon = require('../../models/Pokemon')

module.exports = async function getPokemon(order) {

    const pokemon = await Pokemon.findOne({ order })
        .populate('abilitie')
        .lean()
        .exec()

    if (!pokemon) {
        const error = new Error(`Not found Pokemon ${order}`)
        error.status = 404
        throw error
    }
    return {
        body: pokemon,
        status: 200
    }
}