const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Hello, from the API!' })
        };
    }
});