'use strict';

const Pokemon = require('../../models/Pokemon')

module.exports = async function getAllPokemons() {
    const pokemon = await Pokemon.find()
        .populate('evolution', 'image name')
        .populate('abilities')
        .lean()
        .exec()
    return {
        body: pokemon,
        status: 200
    }
}