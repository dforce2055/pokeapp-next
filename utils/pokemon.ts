import { pokemonApi } from "../api"
import { PokemonDetailsAPI } from "../types"

export const getPokemonDetails = async (identifier: string) => {
  try {
    const result = await pokemonApi.get<PokemonDetailsAPI>(`/pokemon/${ identifier }`)
    const { data } = result

    return {
      id : data.id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
      name: data.name,
      sprites: data.sprites || ['']
    }
  }
  catch (error) {
    return null
  }
}