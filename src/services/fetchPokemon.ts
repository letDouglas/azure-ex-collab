import { Pokemon } from '../myFunctions-types/pokemonTypes';
import { filterPokemon } from './../utils/filters';

export const fetchRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = Math.floor(Math.random() * 20) + 1;
  const url = `${process.env.POKEMON_API_URL_1}${randomId}`;
  if (!url) throw new Error('URL POKEMON_API_URL_1 non configurato');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Errore nella chiamata API 1: ${response.statusText}`);
  }

  const data = await response.json();
  return filterPokemon(data);
};

export const fetchPokemon = async (name: string | null): Promise<Pokemon> => {
  try {
    if (!name) {
      return await fetchRandomPokemon();
    } else {
      const url = `${process.env.POKEMON_API_URL_1}${name}`;
      if (!url) throw new Error('URL POKEMON_API_URL_1 non configurato');

      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          return await fetchRandomPokemon();
        }
        throw new Error(`Errore nella chiamata API 1: ${response.statusText}`);
      }

      const data = await response.json();
      return filterPokemon(data);
    }
  } catch (error: any) {
    console.error('Errore durante il recupero del pokemon:', error);
    throw error; 
  }
};