import { Move } from '../myFunctions-types/pokemonTypes';
import { filterMove } from './../utils/filters';

export const fetchRandomMove = async (): Promise<Move> => {
  const randomId = Math.floor(Math.random() * 10) + 1;
  const url = `${process.env.POKEMON_API_URL_2}${randomId}`;
  if (!url) throw new Error('URL POKEMON_API_URL_2 non configurato');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Errore nella chiamata API 2: ${response.statusText}`);
  }

  const data = await response.json();
  return filterMove(data);
};

export const fetchMove = async (name: string | null): Promise<Move> => {
  try {
    if (!name) {
      return await fetchRandomMove();
    } else {
      const url = `${process.env.POKEMON_API_URL_2}${name}`;
      if (!url) throw new Error('URL POKEMON_API_URL_2 non configurato');

      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          return await fetchRandomMove();
        }
        throw new Error(`Errore nella chiamata API 2: ${response.statusText}`);
      }

      const data = await response.json();
      return filterMove(data);
    }
  } catch (error: any) {
    console.error('Errore durante il recupero della mossa:', error);
    throw error; 
  }
};