import { app } from '@azure/functions';
import { PokemonDataHandler } from './functions/PokemonDataHandler';
import { LocationDataHandler } from './functions/LocationDataHandler';
import { MoveDataHandler } from './functions/MoveDataHandler';
import { AllDataHandler } from './functions/AllDataHandler';

app.setup({
    enableHttpStream: true,
});


app.http('PokemonDataHandler', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: PokemonDataHandler
});

app.http('LocationDataHandler', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: LocationDataHandler
});


app.http('MoveDataHandler', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: MoveDataHandler
});

