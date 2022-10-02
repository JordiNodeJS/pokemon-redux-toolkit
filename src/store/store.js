import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    contador: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    // space where you place result query
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todosApi.middleware)
})
