const { Router } = require('express')
const router=Router();

const routeCategoria = require('./categoria/categoria');
const routeProducto = require('./producto/producto');

// Enviar a user.js cuando tengan la direccion '/api/user'
router.use('/categoria', routeCategoria);
router.use('/producto', routeProducto);

module.exports=router;


