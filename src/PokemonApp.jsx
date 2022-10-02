import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons, isLoading } = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  const handleClickNext = page => dispatch(getPokemons(page))

  const style = {
    visibility: 'hidden',
    color: 'darkred'
  }
  isLoading && (style.visibility = 'visible')

  return (
    <main className='container'>
      <h1>PokemonApp</h1>
      <hr />
      <p style={style}>Loading...</p>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={handleClickNext} disabled={isLoading}>
        Next
      </button>
    </main>
  )
}

export default PokemonApp
