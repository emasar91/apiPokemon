'use strict';

const Abilitie = require('../../models/Abilitie')

module.exports = async function getAllAbilitie() {
    const abilitie = await Abilitie.find()
        .lean()
        .exec()
    return {
        body: abilitie,
        status: 200
    }
}