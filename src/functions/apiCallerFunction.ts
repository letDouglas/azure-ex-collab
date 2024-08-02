import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import * as https from 'https';

async function fetch(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(data);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

export async function apiCallerFunction(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Elaborazione della richiesta');

    const urls = [
        process.env.POKEMON_API_URL_1,
        process.env.POKEMON_API_URL_2,
        process.env.POKEMON_API_URL_3
    ];

    if (!urls.every(url => url)) {
        return {
            status: 500,
            body: 'Una o più URL delle API sono mancanti.'
        };
    }

    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        return {
            status: 200,
            body: JSON.stringify({
                Risposta1: JSON.parse(responses[0]),
                Risposta2: JSON.parse(responses[1]),
                Risposta3: JSON.parse(responses[2])
            })
        };
    } catch (error) {
        context.log(`Errore: ${error.message}`);
        return {
            status: 500,
            body: 'Errore nel recupero dei dati dalle API.'
        };
    }
}

app.http('apiCallerFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: apiCallerFunction
});
