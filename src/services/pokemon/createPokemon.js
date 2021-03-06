'use strict';

const { isEmpty, hasAllStats, abilitieExist, evolExist, checkRegion, checkTypes } = require('../../utils/utils');
const Pokemon = require('../../models/Pokemon');

module.exports = async function createPokemon(pokemon) {

    const { name, weight, height, types, stats, evolution, abilities, image, generation,
        order, region } = pokemon

    if (!name || !weight || !height || !image || !generation || !region ||
        !order || !abilities || !stats || !types) {
        const error = new Error('Missing arguments')
        error.status = 400
        throw error
    }
    checkTypes(types)
    checkRegion(region)

    const nameDuplicate = await Pokemon.findOne({ name })
    if (nameDuplicate) {
        const error = new Error('pokemon already exists with that name')
        error.status = 400
        throw error
    }

    const orderDuplicate = await Pokemon.findOne({ order })
    if (orderDuplicate) {
        const error = new Error('pokemon already exists with that order')
        error.status = 400
        throw error
    }

    if (isEmpty(types) || isEmpty(stats) || isEmpty(abilities)) {
        const error = new Error('Types, Abilities and Stats are required')
        error.status = 400
        throw error
    }

    if (!hasAllStats(stats)) {
        const error = new Error('hp, attack, defense, special-attack, special-defense, defense, accuracy and evasion are required')
        error.status = 400
        throw error
    }

    const arrayAbilities = await abilitieExist(abilities)
    const evol = await evolExist(evolution)

    const pokemonData = {
        name,
        weight,
        height,
        image,
        generation,
        order,
        region,
        types,
        stats,
        evolution: evol,
        abilities: arrayAbilities

    }


    const response = await Pokemon.create(pokemonData)

    return {
        body: { status: 'created', pokemon: { name: response.name, id: response._id } },
        status: 201
    }

}