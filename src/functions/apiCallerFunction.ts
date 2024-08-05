import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import * as https from 'https';


// FIXME: esiste già fetch() nativa in nodejs. Eliminare qualsiasi riferimento a https e usare la modalità vista con Luca.
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


//FIXME: rinominare non "caller" ma è un handler
export async function apiCallerFunction(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Elaborazione della richiesta');
    //FIXME: Mancano i tempi di esecuzione da visualizzare in context.log

    const urls = [
        process.env.POKEMON_API_URL_1,
        process.env.POKEMON_API_URL_2,
        process.env.POKEMON_API_URL_3
    ];


//FIXME: fare le tre chiamate separate. Ogni chiamata API è una funzione di business che va debuggata e testata a parte.
//FIXME: eventuali funzioni di business vano inserite in un modulo separato dalle Azure Functions. 
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


// FIXME: Perchè è qui e non in index.ts? index.ts fa da gateway e è un problema di mantenibilità dle codice mescolare handlers e gateway
app.http('apiCallerFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: apiCallerFunction
});
