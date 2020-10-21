'use strict';

const Router = require('koa-router')
const router = new Router()

router.prefix('/v1')


const pokemonController = require('../api')
const abilitieController = require('../api/abilitie')


//POKEMON ROUTES
// Get one pokemon
router.get('/pokemon/:id', pokemonController.getPokemon)

// Get all pokemon
router.get('/pokemon', pokemonController.getAllPokemons)

// Get pokemons by type
router.put('/pokemon/:type', pokemonController.getPokemonsByType)

// Create pokemon
router.post('/pokemon', pokemonController.createPokemon)

// Update pokemon
router.put('/pokemon/:id', pokemonController.updatePokemon)

// delete one pokemon
router.delete('/pokemon/:id', pokemonController.deletePokemon)


//ABILITIES ROUTES
// Get one abilitie
router.get('/abilitie/:id', abilitieController.getAbilitie)

// Get all abilities
router.get('/abilitie', abilitieController.getAllAbilitie)

// Create abilitie
router.post('/abilitie', abilitieController.createAbilitie)

// Update abilitie
router.put('/abilitie/:id', abilitieController.updateAbilitie)

// delete one abilitie
router.delete('/abilitie/:id', abilitieController.deleteAbilitie)

module.exports = router;