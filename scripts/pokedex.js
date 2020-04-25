var Pokedex = require('pokedex')
const imageDownloader = require('image-downloader')
    
async function getPokemon(number){
    pokedex = new Pokedex()
    name = pokedex.pokemon(number).name
    name = name[0].toUpperCase() + name.slice(1)
    pokedexNumber = fillNumber(number)
    url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokedexNumber}.png`
    await downloadAndSave(url)
    return [name, pokedexNumber]

    function fillNumber(number){
        pokedexnumber = '000'
        numberString = number.toString()
        if (numberString.length == 1){
            pokedexnumber = pokedexnumber[0] + pokedexnumber[1] + numberString
        }
        else{
            if(numberString.length == 2){
               pokedexnumber = pokedexnumber[0] + numberString
            }
            else{
                pokedexnumber = numberString
            }
        }
        console.log('Pokemon Analisado')
        
        return pokedexnumber
    }

    function downloadAndSave(url) {
        return imageDownloader.image({
          url: url,
          dest: './content/pokemon.png'
        })
      }
}

module.exports = getPokemon