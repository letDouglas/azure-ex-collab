import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { fetchRandomPokemon, fetchRandomLocation, fetchRandomMove } from './../services/pokemonService';
import { Pokemon, Location, Move } from '../utils/pokemonTypes';

export const apiHandlerFunction = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
  const startTime = Date.now();
  context.log('Elaborazione della richiesta');

  let dataPokemon: Pokemon | null = null;
  let dataLocation: Location | null = null;
  let dataMove: Move | null = null;

  try {
    dataPokemon = await fetchRandomPokemon();
  } catch (error: any) {
    context.log(`Errore nel recupero del Pokemon: ${error.message}`);
  }

  try {
    dataLocation = await fetchRandomLocation();
  } catch (error: any) {
    context.log(`Errore nel recupero della Location: ${error.message}`);
  }

  try {
    dataMove = await fetchRandomMove();
  } catch (error: any) {
    context.log(`Errore nel recupero della Move: ${error.message}`);
  }

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