'use strict';

const Abilitie = require('../../models/Abilitie');

module.exports = async function createAbilitie(abilitie) {

    const { name, description } = abilitie

    if (!name || !description) {
        const error = new Error('Missing arguments')
        error.status = 400
        throw error
    }

    if (description.length < 30) {
        const error = new Error('Abilitie  description need 30 character at least')
        error.status = 400
        throw error
    }

    const duplicateAbilitie = await Abilitie.findOne({ name })
    if (duplicateAbilitie) {
        const error = new Error('Abilitie already exists with that name')
        error.status = 400
        throw error
    }

    const response = await Abilitie.create(abilitie)

    return {
        body: { status: 'created', abilitie: response },
        status: 201
    }
}