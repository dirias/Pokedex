import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

import { getPokemonsAPI } from '../api/pokemon';
import { getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [nextURL, setNextUrl] = useState(null)
  useEffect(() => {
    ( async() => {
      await loadPokemons();
    })();

  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsAPI(nextURL);
      setNextUrl(response.next)
      const pokemonsArray = [];
      for await ( const pokemon of response.results ) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image : pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error){
      console.error(error)
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons = {pokemons} loadPokemons={loadPokemons} isNext={nextURL}/>
    </SafeAreaView>
  )
}