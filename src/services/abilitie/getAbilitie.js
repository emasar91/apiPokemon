'use strict';

const Abilitie = require('../../models/Abilitie')

module.exports = async function getAbilitie(name) {

    const abilitie = await Abilitie.findOne({ name })
        .lean()
        .exec()

    if (!abilitie) {
        const error = new Error(`Not found Abilitie ${name}`)
        error.status = 404
        throw error
    }
    return {
        body: abilitie,
        status: 200
    }
}