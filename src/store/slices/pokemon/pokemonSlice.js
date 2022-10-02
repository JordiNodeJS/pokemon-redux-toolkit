import { createSlice } from '@reduxjs/toolkit'
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true
    },
    setPokemon: (state, action) => {
      state.page = action.payload.page + 1
      state.pokemons = action.payload.pokemons
      state.isLoading = false
    }
  }
})
export const { startLoadingPokemons, setPokemon } = pokemonSlice.actions
