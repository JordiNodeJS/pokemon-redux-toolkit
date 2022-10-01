import { setPokemon, startLoadingPokemons } from './pokemonSlice'

// 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())
    // TODO: realizar petición http
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
    const data = await res.json()
    dispatch(setPokemon({ pokemons: data.results, page: page + 1 }))
  }
}
