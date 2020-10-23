'use strict';

const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    generation: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true,
        enum: [
            'kanto',
            'johto',
            'hoenn',
            'sinnoh',
            'teselia',
            'kalos',
            'alola',
            'galar'
        ]
    },
    order: {
        type: Number,
        required: true,
        unique: true
    },
    types: [{
        type: {

            type: String,
            required: true,
            enum: ['normal',
                'fighting',
                'flying',
                'poison',
                'ground',
                'rock',
                'bug',
                'ghost',
                'steel',
                'fire',
                'water',
                'grass',
                'electric',
                'psychic',
                'ice',
                'dragon',
                'dark',
                'fairy',
                'unknow',
                'shadow']
        },
        _id: false
    }],
    stats:
    {
        hp: {
            type: Number,
            required: true
        },
        attack: {
            type: Number,
            required: true
        },
        defense: {
            type: Number,
            required: true
        },
        special_attack: {
            type: Number,
            required: true
        },
        special_defense: {
            type: Number,
            required: true
        },
        accuracy: {
            type: Number,
            required: true
        },
        evasion: {
            type: Number,
            required: true
        },
        _id: false
    },
    evolutions: [{
        evol: {
            type: mongoose.Schema.Types.ObjectId, ref: 'pokemon'
        },
        _id: false
    }],
    abilities: [{
        abilitie:
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'abilities',
        },
        _id: false
    }
    ]
    ,
}, { versionKey: false })

const Pokemon = mongoose.model('pokemon', PokemonSchema)

module.exports = Pokemon