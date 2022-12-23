
const express    = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const cors       = require('cors');
const swaggerUi  = require('swagger-ui-express')
const mongoose   = require("mongoose");
const env        = require("dotenv/config");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/', require('./router'));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(require('./swagger_output.json')));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// !
// ! Hey EVE
// !
app.use((req, res, next) => {
  return res.status(200).json({resp: 'Hey EVE!'});
});

app.listen(process.env.PORT)
console.log('🔥🔥🔥 Server rodando na porta '+process.env.PORT+'!!');

module.exports.api = serverless(app);

