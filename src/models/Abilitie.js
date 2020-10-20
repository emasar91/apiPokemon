'use strict';

const mongoose = require('mongoose')

const AbilitieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Abilitie = mongoose.model('abilitie', AbilitieSchema)

module.exports = Abilitie