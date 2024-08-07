import { Move } from '../myFunctions-types/pokemonTypes';
import { filterMove } from './../utils/filters';

export const fetchRandomMove = async (): Promise<Move> => {
  const randomId = Math.floor(Math.random() * 10) + 1;
  const url = `${process.env.POKEMON_API_URL_3}${randomId}`;
  if (!url) throw new Error('URL POKEMON_API_URL_3 non configurato');
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Errore nella chiamata API 3: ${response.statusText}`);
  }
  const data = await response.json();
  return filterMove(data);
};