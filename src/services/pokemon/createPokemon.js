'use strict';

const { isEmpty, hasAllStats } = require('../../utils/utils');
const Pokemon = require('../../models/Pokemon');
const Abilitie = require('../../models/Abilitie');

module.exports = async function createPokemon(pokemon) {

    const { name, weight, height, types, stats, evolution, abilities, image, generation,
        order, region } = pokemon

    if (!name || !weight || !height || !image || !generation || !region ||
        !order || !abilities || !stats || !types) {
        const error = new Error('Missing arguments')
        error.status = 400
        throw error
    }
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

    // const evol = await Pokemon.findOne({ name: evolution })
    // if (!evol) {
    //     const error = new Error('[Evolution] pokemon does not exist')
    //     error.status = 400
    //     throw error
    // }

    if (isEmpty(types) || isEmpty(stats) || isEmpty(abilities)) {
        const error = new Error('Types, Abilities and Stats are required')
        error.status = 400
        throw error
    }

    // const existAbilitie = await Abilitie.findOne({ name: abilities })
    // if (!existAbilitie) {
    //     const error = new Error('[Abilitie] does not exist')
    //     error.status = 400
    //     throw error
    // }

    if (!hasAllStats(stats)) {
        const error = new Error('hp, attack, defense, special-attack, special-defense, defense, accuracy and evasion are required')
        error.status = 400
        throw error
    }

    // const pokemonData = {
    //     name,
    //     weight,
    //     height,
    //     types,
    //     stats,
    //     evolution: evol._id,
    //     abilities,
    //     image,
    //     generation,
    //     order,
    //     region

    // }


    const response = !evolution ? await Pokemon.create(pokemon) : await Pokemon.create(pokemonData)

    return {
        body: { status: 'created', pokemon: response },
        status: 201
    }

}