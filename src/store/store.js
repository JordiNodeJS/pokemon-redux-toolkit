import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    contador: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  }
})
