'use strict';

const Pokemon = require('../../models/Pokemon');
const { isEmpty, hasAllStats, abilitieExist, evolExist, checkRegion, checkTypes } = require('../../utils/utils');


module.exports = async function updateAbilitie(pokemon, namePokemon) {
    const { name, weight, height, types, stats, evolution, abilities, image, generation,
        order, region } = pokemon

    const oldPokemon = await Pokemon.findOne({ name: namePokemon })
    if (!oldPokemon) {
        const error = new Error('Pokemon does not exist')
        error.status = 400
        throw error
    }

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



    name, weight, height, types, stats, evolution, abilities, image, generation,
        order, region

    await oldPokemon.set('name', name)
    await oldPokemon.set('weight', weight)
    await oldPokemon.set('height', height)
    await oldPokemon.set('types', types)
    await oldPokemon.set('stats', stats)
    await oldPokemon.set('image', image)
    await oldPokemon.set('generation', generation)
    await oldPokemon.set('stats', stats)
    await oldPokemon.set('order', order)
    await oldPokemon.set('region', region)
    await oldPokemon.set('abilities', arrayAbilities)
    evolution ? await oldPokemon.set('evolution', evol) : ''
    await oldPokemon.save()

    return {
        body: { status: 'updated', pokemon: oldPokemon },
        status: 200
    }
}