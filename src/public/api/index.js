'use strict';

const pokemonServices = require('../../services/pokemon')
const config = require('../../../config/config')

module.exports = {
    getPokemon: async function (ctx) {
        const _id = ctx.params.id
        const response = isNaN(parseInt(_id))
            ? await pokemonServices.getPokemonByName(_id)
            : await pokemonServices.getPokemonById(_id)
        ctx.body = response.body
        ctx.status = response.status
    },
    getAllPokemons: async function (ctx) {
        const response = await pokemonServices.getAllPokemons()
        ctx.body = response.body
        ctx.status = response.status
    },
    getPokemonsByType: async function (ctx) {
        const type = ctx.params.type
        if (!type) {
            throw new Error('Cannot search pokemon whitout type')
        }
        const response = await pokemonServices.getPokemonsByType(type)
        ctx.body = response.body
        ctx.status = response.status
    },
    createPokemon: async function (ctx) {
        const admin = ctx.request.body.admin
        const secret = ctx.request.body.secret
        const pokemon = ctx.request.body.pokemon
        if (!admin || !secret) {
            throw new Error('Cannot create pokemon whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!pokemon) {
            throw new Error('Cannot create pokemon whitout data')
        }
        const response = await pokemonServices.createPokemon(pokemon)
        ctx.body = response.body
        ctx.status = response.status
    },
    updatePokemon: async function (ctx) {
        const admin = ctx.request.body.admin
        const secret = ctx.request.body.secret
        const pokemon = ctx.request.body.pokemon
        const _id = ctx.params.id
        if (!admin || !secret) {
            throw new Error('Cannot create pokemon whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!_id) {
            throw new Error('Cannot update pokemon whitout id')
        }
        if (!pokemon) {
            throw new Error('Cannot create pokemon whitout data')
        }
        const response = await pokemonServices.updatePokemon(pokemon, _id)
        ctx.body = response.body
        ctx.status = response.status
    },
    deletePokemon: async function (ctx) {
        const admin = ctx.request.body.admin
        const secret = ctx.request.body.secret
        const _id = ctx.params.id
        if (!admin || !secret) {
            throw new Error('Cannot create pokemon whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!_id) {
            throw new Error('Cannot update pokemon whitout id')
        }
        const response = await pokemonServices.deletePokemon(_id)
        ctx.body = response.body
        ctx.status = response.status
    }
}