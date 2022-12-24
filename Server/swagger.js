const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' })
const path = require('path');

const outputFile = path.resolve('swagger_output.json');
const endpoint = path.resolve('router.js');
const endpointsFiles = [endpoint]
 
const doc = {
    info: {
        version: "0.0.1",
        title: "EVE Star Wars API",
        description: "Endpoints of the planets"
    },
    host: "b6clr603e5.execute-api.us-east-2.amazonaws.com",
    basePath: "/",
    schemes: [ 'https'],
    tags: [
        {
            "name": "Planets",
            "description": "Endpoint to view the planets in data base"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://3f11mdawqa.execute-api.us-east-2.amazonaws.com",
        }
    },
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index')
})