import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { fetchRandomLocation } from './../services/fetchLocation';
import { Location } from '../myFunctions-types/pokemonTypes';

export async function LocationDataHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const startTime = Date.now();
    context.log('Elaborazione della richiesta');

    try {
        const dataLocation = await fetchRandomLocation();
        const endTime = Date.now();
        const executionTime = endTime - startTime;

        return {
            status: 200,
            body: JSON.stringify({
                Risposta1: dataLocation,
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
};

