'use strict';

const Pokemon = require('../../models/Pokemon')

module.exports = async function getAllPokemons() {
    const pokemons = await Pokemon.find().sort({ order: 1 })
        .populate('abilities')
        .populate('evolution', 'name image types order')
        .lean()
        .exec()
    return {
        body: pokemons,
        status: 200
    }
}