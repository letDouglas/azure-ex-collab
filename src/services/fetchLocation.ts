import { Location } from '../myFunctions-types/pokemonTypes';
import { filterLocation } from './../utils/filters';

export const fetchRandomLocation = async (): Promise<Location> => {
  const randomId = Math.floor(Math.random() * 20) + 1;
  const url = `${process.env.POKEMON_API_URL_3}${randomId}`;
  if (!url) throw new Error('URL POKEMON_API_URL_3 non configurato');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Errore nella chiamata random API 3: ${response.statusText}`);
  }

  const data = await response.json();
  return filterLocation(data);
};

export const fetchLocation = async (name: string | null): Promise<Location> => {
  try {
    if (!name) {
      return await fetchRandomLocation();
    } else {
      const url = `${process.env.POKEMON_API_URL_3}${name}`;
      if (!url) throw new Error('URL POKEMON_API_URL_3 non configurato');

      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          return await fetchRandomLocation();
        }
        throw new Error(`Errore nella chiamata API 3: ${response.statusText}`);
      }

      const data = await response.json();
      return filterLocation(data);
    }
  } catch (error: any) {
    console.error('Errore durante il recupero della location:', error);
    throw error; 
  }
};