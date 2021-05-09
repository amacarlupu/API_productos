const router = require('express').Router();
const Categoria = require('../../models/categoriaModel');

// Database Connection
require('../../config/db');

// Obtner maestro de modulos
router.get('/all', async (req, res) => {

    const respCategoria = await Categoria.findAll();

    res.json(respCategoria);
});

router.get('/:id', async (req, res) => {
    const respCateID = await Categoria.findAll({
        where:{
            id:req.params.id
        }
    });
    res.json(respCateID);
});

module.exports = router;