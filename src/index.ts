import { app } from '@azure/functions';
import { apiHandlerFunction } from './functions/apiHandlerFunction';

app.setup({
    enableHttpStream: true,
});

app.http('apiHandlerFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: apiHandlerFunction
});
