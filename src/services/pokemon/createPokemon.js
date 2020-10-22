'use strict';

const { isEmpty, hasAllStats } = require('../../utils/utils');
const Pokemon = require('../../models/Pokemon')

module.exports = async function createPokemon(pokemon) {
    const { name, weight, height, types, stats, evolutions, abilities, image, generation,
        order } = pokemon

    if (!name || !weight || !height || !image || !generation ||
        !order || !abilities || !stats || !types) {
        const error = new Error('Missing arguments')
        error.status = 400
        throw error
    }
    if (isEmpty(types) || isEmpty(stats) || isEmpty(abilities)) {
        const error = new Error('Types and Stats are required')
        error.status = 400
        throw error
    }
    if (!hasAllStats(stats)) {
        const error = new Error('hp, attack, defense, special-attack, special-defense, defense, accuracy and evasion are required')
        error.status = 400
        throw error
    }

    const pokemonData = {
        name: 'ish',
        weight: 3,
        height: 5,
        order: 2,
        image: 'asd',
        generation: '20',
        types: ['normal', 'bug'],
        stats: [1, 2, 3, 4, 5, 6, 7
        ],
        // evolutions: [{ name: 'cacahuate' }],
        abilities: ["5f90fb9b16f61a33106b97d7"]
    }

    console.log(pokemonData)
    const response = await Pokemon.create(pokemonData)

    return {
        body: { status: 'created', pokemon: response },
        // body: pokemon,
        status: 201
    }
    // return {
    //     body: {
    //         name, weight, height, image, generation, order, evolutions, abilities, stats, types
    //     },
    //     status: 200
    // }
}