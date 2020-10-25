'use strict'

const Abilitie = require('../../models/Abilitie')

module.exports = async function deletAbilitie(name) {
    const abilitie = await Abilitie.findOne({ name })
        .lean()
        .exec()

    if (!abilitie) {
        const error = new Error(`Not found abilitie "${name}"`)
        error.status = 404
        throw error
    }
    await Abilitie.deleteOne({ name })
        .lean()
        .exec()

    return {
        body: { status: 'deleted' },
        status: 200
    }
}
