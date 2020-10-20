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
    types: [{
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
    }],
    stats: [
        {
            name: 'hp',
            type: Number,
            required: true
        },
        {
            name: 'attack',
            type: Number,
            required: true
        },
        {
            name: 'defense',
            type: Number,
            required: true
        },
        {
            name: 'special-attack',
            type: Number,
            required: true
        },
        {
            name: 'special-defense',
            type: Number,
            required: true
        },
        {
            name: 'accuracy',
            type: Number,
            required: true
        },
        {
            name: 'evasion',
            type: Number,
            required: true
        }
    ],
    evolutions: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'pokemon'
        }
    ],
    abilities: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'abilities',
        }
    ],
    image: {
        type: String,
        required: true
    },
    generation: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
})

const Pokemon = mongoose.model('pokemon', PokemonSchema)

module.exports = Pokemon