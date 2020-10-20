'use strict';

const abilitiesServices = require('../../services/abilitie')
const config = require('../../init/config')()

module.exports = {
    getAbilitie: async function (ctx) {
        const _id = ctx.params.id
        if (!_id) {
            throw new Error('Cannot search abilitie whitout id')
        }
        const response = await abilitie.getAbilitie(_id)
        ctx.body = response.body
        ctx.status = response.status

    },
    getAllAbilitie: async function (ctx) {
        const response = await abilitiesServices.getAllAbilitie()
        ctx.body = response.body
        ctx.status = response.status
    },
    createAbilitie: async function (ctx) {
        const admin = ctx.request.body.admin
        const secret = ctx.request.body.secret
        const abilitie = ctx.request.body.abilitie
        if (!admin || !secret) {
            throw new Error('Cannot create pokemon whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!pokemon) {
            throw new Error('Cannot create abilitie whitout data')
        }
        const response = await abilitiesServices.createAbilitie(abilitie)
        ctx.body = response.body
        ctx.status = response.status
    },
    updateAbilitie: async function (ctx) {
        const admin = ctx.request.body.admin
        const secret = ctx.request.body.secret
        const abilitie = ctx.request.body.pokemon
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
            throw new Error('Cannot create abilitie whitout data')
        }
        const response = await abilitiesServices.updateAbilitie(abilitie, _id)
        ctx.body = response.body
        ctx.status = response.status
    },
    deleteAbilitie: async function (ctx) {
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
            throw new Error('Cannot update abilitie whitout id')
        }
        const response = await abilitiesServices.deleteAbilitie(_id)
        ctx.body = response.body
        ctx.status = response.status
    }
}