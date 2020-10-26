'use strict';
const Abilitie = require('../models/Abilitie');
const Pokemon = require('../models/Pokemon');

module.exports = {
    isEmpty: function (array) {
        return array.length === 0
    },
    hasAllStats: function (stats) {
        try {

            const { hp, attack, defense, special_attack,
                special_defense, accuracy, evasion } = stats

            if (!hp || !attack || !defense || !special_attack ||
                !special_defense || !accuracy || !evasion) {
                const error = new Error('all stats are required (hp, attack, defense, special_attack,special_defense, accuracy, evasion)')
                error.status = 400
                throw error
            }
            if (
                typeof hp !== 'number' ||
                typeof attack !== 'number' ||
                typeof defense !== 'number' ||
                typeof special_attack !== 'number' ||
                typeof special_defense !== 'number' ||
                typeof accuracy !== 'number' ||
                typeof evasion !== 'number'
            ) {
                const error = new Error('stats must be numbers')
                error.status = 400
                throw error
            }
            if (hp && attack && defense && special_attack &&
                special_defense && accuracy && evasion) {
                return true
            }
            return false
        } catch (error) {
            throw error
        }
    },
    abilitieExist: async function (abilities) {
        var arrayAbilities = []
        for (let index = 0; index < abilities.length; index++) {
            const existAbilitie = await Abilitie.findOne({ name: abilities[index] })
            if (existAbilitie) {
                arrayAbilities.push(existAbilitie._id)
            } else {
                const error = new Error(`[Abilitie] does not exist ${abilities[index]}`)
                error.status = 400
                throw error
            }
        }
        return arrayAbilities
    },
    evolExist: async function (evolution) {
        if (evolution) {
            const pokemonEvolution = await Pokemon.findOne({ name: evolution })
            if (!pokemonEvolution) {
                const error = new Error(`[Evolution] pokemon does not exist: ${evolution}`)
                error.status = 400
                throw error
            }
            return pokemonEvolution
        }
        return undefined
    },
    checkRegion: function (region) {
        const error = new Error('region must be correct')
        error.status = 400
        switch (region) {
            case 'kanto': break
            case 'johto': break
            case 'hoenn': break
            case 'sinnoh': break
            case 'teselia': break
            case 'kalos': break
            case 'alola': break
            case 'galar': break
            default:
                throw error
        }
    },
    checkTypes: function (types) {
        const error = new Error('type must be exist')
        error.status = 400
        for (let index = 0; index < types.length; index++) {
            console.log(types[index])
            switch (types[index]) {
                case 'normal': break
                case 'fighting': break
                case 'flying': break
                case 'poison': break
                case 'ground': break
                case 'rock': break
                case 'bug': break
                case 'ghost': break
                case 'steel': break
                case 'fire': break
                case 'water': break
                case 'grass': break
                case 'electric': break
                case 'psychic': break
                case 'ice': break
                case 'dragon': break
                case 'dark': break
                case 'fairy': break
                case 'unknow': break
                case 'shadow': break
                default:
                    throw error
            }
        }
    }
}