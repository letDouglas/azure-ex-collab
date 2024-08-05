import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { fetchPokemonData1, fetchPokemonData2, fetchPokemonData3 } from './../services/pokemonService'; 

/**
 * Handler per la funzione API che gestisce le richieste HTTP.
 * Effettua chiamate a tre API per ottenere dati sui Pokémon, filtra e restituisce i risultati.
 * 
 * @param {HttpRequest} request - Oggetto della richiesta HTTP.
 * @param {InvocationContext} context - Contesto di invocazione della funzione.
 * @returns {Promise<HttpResponseInit>} - Oggetto della risposta HTTP.
 */

export async function apiHandlerFunction(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const startTime = Date.now();  
    context.log('Elaborazione della richiesta');

    try {
        const [data1, data2, data3] = await Promise.all([
            fetchPokemonData1(),
            fetchPokemonData2(),
            fetchPokemonData3()
        ]);
        
        const endTime = Date.now(); 

        const executionTime = endTime - startTime;
        context.log(`Tempo di esecuzione: ${executionTime} ms`);  

        //FIXME: Le tre api che vengono chiamate non devono essere le stesse ma tre diverse api con strutture diverse.
        const filteredResponses = [data1, data2, data3].map(data => ({
            nome: data.name,
            tipo: data.types[0]?.type?.name,
            peso: data.weight,
            immagine: data.sprites.front_default
        }));

        return {
            status: 200,
            body: JSON.stringify({
                Risposta1: filteredResponses[0],
                Risposta2: filteredResponses[1],
                Risposta3: filteredResponses[2]
            })
        };
    } catch (error) {
        const errorMessage = (error as Error).message;
        context.log(`Errore: ${errorMessage}`);
        return {
            status: 500,
            body: 'Errore nel recupero dei dati dalle API.'
        };
    }
}
