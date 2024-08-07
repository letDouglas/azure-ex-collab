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