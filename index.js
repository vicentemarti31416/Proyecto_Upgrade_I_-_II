const express = require('express');
const { connect } = require('./src/utils/database'); 
const routerCliente = require('./src/api/routes/cliente.routes');
const routerTienda = require('./src/api/routes/tienda.routes');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/clientes', routerCliente);
app.use('/tiendas', routerTienda);


app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));