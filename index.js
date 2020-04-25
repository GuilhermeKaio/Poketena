const dayCount = require('./scripts/dayCount.js')
const pokedex = require('./scripts/pokedex.js')
const twitter = require('./scripts/twitter.js')

async function start() {
    count = dayCount()
    pokemon = await pokedex(count)
    await twitter(pokemon, count)
}

start()
