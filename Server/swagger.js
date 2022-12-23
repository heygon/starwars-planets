const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' })
const path = require('path');

const outputFile = path.resolve('swagger_output.json');
const endpoint = path.resolve('router.js');
const endpointsFiles = [endpoint]
 
const doc = {
    info: {
        version: "0.0.1",
        title: "CotaPay",
        description: "Endpoints de pagamentos"
    },
    host: "b6clr603e5.execute-api.us-east-2.amazonaws.com",
    basePath: "/",
    schemes: [ 'https'],
    tags: [
        {
            "name": "Pagamentos",
            "description": "Api para consulta e pagamento de débitos"
        },
        {
            "name": "Usuários",
            "description": "Enpoints relacionados aos usuários do app Cotabank"
        },
        {
            "name": "Caema",
            "description": "Enpoints para culsultar os dados fornecidos pela Caema"
        },
        {
            "name": "Transações",
            "description": "Armazena o histórico das transações efetuadas pelo usuário"
        },
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://ofsec72a1f.execute-api.us-east-2.amazonaws.com",
        }
    },
    /*
    definitions         : { // Aqui informa as models e seus campos
        User            : {
            Nome        : 'string',
            Email       : 'string',
            Rash        : 'string',
            CPF         : 'string',
            Contato     : 'string',
            Status      : 'string',
        },
        Produtos        : {
            Nome        : 'string',
            Imagem      : [{
                Url     : 'string',
                Status  : 'string' 
            }],
            Status      : 'string',
            Valor       : 'string',
            Loja        : 'string',
            Descricao   : 'string',
            Quantidade  : 'string',
            Avaliacao   : [{
                Usuario : 'string',
                Estrela : 'string',
                Comentario : 'string',
                Data    : 'string',
                Status  : 'string'
            }],
            Categoria   : 'string',
            Marca       : 'string',
            Material    : 'string',
            AnoFabricacao  : 'string',
        },
        Lojas           : {
            Nome        : 'string',
            Email       : 'string',
            CNPJ        : 'string',
            Telefone    : 'string',
            InscricaoEstadual    : 'string',
            Insento     : 'string',
            Imagem      : [{
                Url     : 'string',
                Status  : 'string' 
            }],
            Status      : 'string',
            Procentagem : 'string',
            Usuario     : 'string',
            Descricao   : 'string',
            Avaliacao   : [{
                Usuario : 'string',
                Estrela : 'string',
                Comentario : 'string',
                Data    : 'string',
                Status  : 'string'
            }],
            Endereco    : 'string',
            CEP         : 'string',
            Estado      : 'string',
            Cidade      : 'string',
            Bairro      : 'string',
            Numero      : 'string',
            Complemento : 'string',
        },
        Categorias      :{
            Nome        : 'string',
            Imagem      : 'string',
            Status      : 'string',
        },
        Pedidos            :{
            Usuario        : '',
            Entregador     : '',
            Data           : '',
            Status         : '',
            ValorTotal     : '',
            ValorEntrega   : '',
            Obervacao      : '',
            AvaliacaoComent: '',
            Estrelas       : '',
            Produtos       : [{
                Produto    : '',
                Valor      : '',
                Loja       : '',
                Quantidade : '',
                Data       : '',
                Status     : ''
            }],
            Historico      : [{
                Quem       : '',
                Descricao  : '',
                Data       : '',
                Status     : '',
                Location : {
                    type : 'Point',
                    coordinates : ['','']
                },
            }],
            Origem         : {
                Endereco   : '',
                CEP        : '',
                Cidade     : '',
                Estado     : '',
                Location : {
                    type : 'Point',
                    coordinates : ['','']
                },
            },
            Destino        : {
                Endereco   : '',
                CEP        : '',
                Cidade     : '',
                Estado     : '',
                Location : {
                    type : 'Point',
                    coordinates : ['','']
                },
            }
        }
    }
    */
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index')
})