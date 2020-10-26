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
        const namePokemon = ctx.params.name
        if (!admin || !secret) {
            throw new Error('Cannot create pokemon whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!namePokemon) {
            throw new Error('Cannot update pokemon whitout name')
        }
        if (!pokemon) {
            throw new Error('Cannot create pokemon whitout data')
        }
        const response = await pokemonServices.updatePokemon(pokemon, namePokemon)
        ctx.body = response.body
        ctx.status = response.status
    },
    deletePokemon: async function (ctx) {
        const admin = ctx.request.query.admin
        const secret = ctx.request.query.secret
        const name = ctx.params.name
        if (!admin || !secret) {
            throw new Error('Cannot create pokemon whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!name) {
            throw new Error('Cannot delete pokemon whitout name')
        }
        const response = await pokemonServices.deletePokemon(name)
        ctx.body = response.body
        ctx.status = response.status
    }
}