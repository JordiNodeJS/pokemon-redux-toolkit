import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

const PokemonApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return <div>PokemonApp</div>
}

export default PokemonApp
