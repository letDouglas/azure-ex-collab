import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { fetchRandomPokemon } from './../services/fetchPokemon';
import { Pokemon } from '../myFunctions-types/pokemonTypes';

export async function PokemonDataHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const startTime = Date.now();
    context.log('Elaborazione della richiesta');

    try {

        // TODO: leggere query param: name dalla request e passarlo alla funzione fetchRandomPokemon. Se il parametro non è presente, utilizzare un valore random cosi' com'e' altrimenti utilizzare il valore passato come parametro

        const dataPokemon = await fetchRandomPokemon();
        const endTime = Date.now();
        const executionTime = endTime - startTime;

        return {
            status: 200,
            body: JSON.stringify({
                Risposta1: dataPokemon,
                Risposta2: `Tempo di esecuzione: ${executionTime}`,
            })
        };
    } catch (error: any) {
        return {
            status: 500,
            body: JSON.stringify({
                error: {
                    message: error.message,
                    code: 'INTERNAL_SERVER_ERROR'
                }
            })
        };
    }
}