'use strict';

const abilitiesServices = require('../../services/abilitie')
const config = require('../../../config/config')

module.exports = {
    getAbilitie: async function (ctx) {
        const name = ctx.params.name
        if (!name) {
            throw new Error('Cannot search abilitie whitout id')
        }
        const response = await abilitiesServices.getAbilitie(name)
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
        console.log(ctx.request.body)

        if (!admin || !secret) {
            throw new Error('Cannot create abilitie whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!abilitie) {
            throw new Error('Cannot create abilitie whitout data')
        }
        const response = await abilitiesServices.createAbilitie(abilitie)
        ctx.body = response.body
        ctx.status = response.status
    },
    updateAbilitie: async function (ctx) {
        const admin = ctx.request.body.admin
        const secret = ctx.request.body.secret
        const abilitie = ctx.request.body.abilitie
        const nameAbilitie = ctx.params.name
        if (!admin || !secret) {
            throw new Error('Cannot create abilitie whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!nameAbilitie) {
            throw new Error('Cannot update abilitie whitout name')
        }
        if (!abilitie) {
            throw new Error('Cannot create abilitie whitout data')
        }
        const response = await abilitiesServices.updateAbilitie(abilitie, nameAbilitie)
        ctx.body = response.body
        ctx.status = response.status
    },
    deleteAbilitie: async function (ctx) {
        const admin = ctx.request.query.admin
        const secret = ctx.request.query.secret
        const name = ctx.params.name
        if (!admin || !secret) {
            throw new Error('Cannot delete abilitie whitout credentials')
        }
        if (admin !== config.ADMIN || secret !== config.SECRET) {
            throw new Error('Invalids Credential')
        }
        if (!name) {
            throw new Error('Cannot delete abilitie whitout name')
        }
        const response = await abilitiesServices.deleteAbilitie(name)
        ctx.body = response.body
        ctx.status = response.status
    }
}