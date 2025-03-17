import React, { useEffect, useState } from 'react'

const PokemonSingle = () => {

  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")


  const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setError(error)
        setLoading(false)

      });
  }, [])


  if (loading) {
    return (
      <div className='text-center text-2xl font-bold'>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center text-2xl font-bold'>
        <h1>Error: {error.message}</h1>
      </div>
    )
  }

  console.log(pokemon);

  return (
    <section className='text-center mt-8 mb-8'>
      <header>
        <h1 className='text-4xl mb-5 font-bold'>Lets catch Pokemon API</h1>
      </header>
      <ul className='max-w-md block m-auto shadow bg-blue-100 rounded-md'>
        <li className='pokemon-card'>
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className='pokemon-image m-auto block'
            />
          </figure>
          <h1 className='text-xl capitalize mt-5 font-bold'>{pokemon.name}</h1>
        </li>
      </ul>
    </section>
  )
}

export default PokemonSingle