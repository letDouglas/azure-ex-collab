import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { fetchRandomPokemon, fetchRandomLocation, fetchRandomMove } from './../services/pokemonService';
import { Pokemon, Location, Move } from '../utils/pokemonTypes';

const fetchPokemonData = async (context: InvocationContext): Promise<Pokemon | null> => {
  try {
    return await fetchRandomPokemon();
  } catch (error: any) {
    context.log(`Errore nel recupero del Pokemon: ${error.message}`);
    return null;
  }
};

const fetchLocationData = async (context: InvocationContext): Promise<Location | null> => {
  try {
    return await fetchRandomLocation();
  } catch (error: any) {
    context.log(`Errore nel recupero della Location: ${error.message}`);
    return null;
  }
};

const fetchMoveData = async (context: InvocationContext): Promise<Move | null> => {
  try {
    return await fetchRandomMove();
  } catch (error: any) {
    context.log(`Errore nel recupero della Move: ${error.message}`);
    return null;
  }
};

export const apiHandlerFunction = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
  const startTime = Date.now();
  context.log('Elaborazione della richiesta');

  const dataPokemon = await fetchPokemonData(context);
  const dataLocation = await fetchLocationData(context);
  const dataMove = await fetchMoveData(context);

  const endTime = Date.now();
  const executionTime = endTime - startTime;
  context.log(`Tempo di esecuzione: ${executionTime} ms`);

  if (!dataPokemon && !dataLocation && !dataMove) {
    return {
      status: 500,
      body: 'Errore nel recupero di tutti i dati dalle API.'
    };
  }

  return {
    status: 200,
    body: JSON.stringify({
      Risposta1: dataPokemon,
      Risposta2: dataLocation,
      Risposta3: dataMove,
    })
  };
};
