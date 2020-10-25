'use strict';

const Abilitie = require('../../models/Abilitie');

module.exports = async function updateAbilitie(abilitie, nameAbilitie) {
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

    const oldAbilitie = await Abilitie.findOne({ name: nameAbilitie })
    if (!oldAbilitie) {
        const error = new Error('Abilitie does not exist')
        error.status = 400
        throw error
    }

    await oldAbilitie.set('name', name)
    await oldAbilitie.set('description', description)
    await oldAbilitie.save()

    return {
        body: { status: 'updated', abilitie: oldAbilitie },
        status: 200
    }
}