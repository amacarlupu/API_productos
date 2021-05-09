const express = require('express');
const apiRouter=require('./routes/apiRoute');
const cors = require('cors');

const app = express();

app.use(cors());

// Puerto por defecto
const port = process.env.PORT || 3000;

// MIDDLEWERES

// Rutas que comienzen con '/user' serán enviadas a apiRouter
app.use('/tienda', apiRouter);
// app.use(app.router);
// apiRouter.initialize(app);


// Comenzar servidor express
app.listen(port, () => {
    console.log(`Servidor iniciando en el puerto ${ port }`);
});