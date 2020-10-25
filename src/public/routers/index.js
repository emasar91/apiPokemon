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
router.get('/pokemons/all', pokemonController.getAllPokemons)

// Get pokemons by type
router.get('/pokemon/type/:type', pokemonController.getPokemonsByType)

// Create pokemon
router.post('/pokemon', pokemonController.createPokemon)

// Update pokemon
router.put('/pokemon/:id', pokemonController.updatePokemon)

// delete one pokemon
router.delete('/pokemon/:id', pokemonController.deletePokemon)


//ABILITIES ROUTES
// Get one abilitie
router.get('/abilitie/:name', abilitieController.getAbilitie)

// Get all abilities
router.get('/abilitie', abilitieController.getAllAbilitie)

// Create abilitie
router.post('/abilitie', abilitieController.createAbilitie)

// Update abilitie
router.put('/abilitie/:name', abilitieController.updateAbilitie)

// delete one abilitie
router.delete('/abilitie/:name', abilitieController.deleteAbilitie)

module.exports = router;