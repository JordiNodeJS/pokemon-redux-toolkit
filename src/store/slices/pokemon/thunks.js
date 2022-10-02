import { pokemonApi } from '../../../api/pokemonApi'
import { setPokemon, startLoadingPokemons } from './pokemonSlice'

// 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

export const getPokemons = () => async (dispatch, getState) => {
  const {
    pokemons: { page }
  } = getState()
  dispatch(startLoadingPokemons())
  // TODO: realizar petición http
  // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
  // const data = await res.json()
  const {
    data: { results }
  } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

  dispatch(setPokemon({ pokemons: results, page }))
}
