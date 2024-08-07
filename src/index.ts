import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { getPokemonDataFromAPI1 } from './functions/apiHandlerFunction';
import { getPokemonDataFromAPI2 } from './functions/apiHandlerFunction';
import { getPokemonDataFromAPI3 } from './functions/apiHandlerFunction';
import { TypeBattleArmor } from './lib/type';
import { TypePokemon } from './lib/type';
import { TypeSpecies } from './lib/type';

export async function apiHandlerFunction(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const startTime = Date.now();  
    context.log('    della richiesta');

    try {
        const [data1, data2, data3] = await Promise.all([
            getPokemonDataFromAPI1(context),
            getPokemonDataFromAPI2(context),
            getPokemonDataFromAPI3(context)
        ]);
        
        const endTime = Date.now(); 
        const executionTime = endTime - startTime;
        context.log(`Tempo di esecuzione: ${executionTime} ms`);  

        // Esempio di filtraggio dei dati recuperati
        const filteredResponses = [data1, data2, data3].map(data => ({
            // Aggiungere qui il logica per filtrare e trasformare i dati in base alle necessità
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
