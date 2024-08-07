import { Location } from '../myFunctions-types/pokemonTypes';
import { filterLocation } from './../utils/filters';

export const fetchRandomLocation = async (): Promise<Location> => {
  const randomId = Math.floor(Math.random() * 10) + 1;
  const url = `${process.env.POKEMON_API_URL_2}${randomId}`;
  if (!url) throw new Error('URL POKEMON_API_URL_2 non configurato');
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Errore nella chiamata API 2: ${response.statusText}`);
  }
  const data = await response.json();
  return filterLocation(data);
};