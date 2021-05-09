const router = require('express').Router();
const Producto = require('../../models/productoModel');
const Categoria = require('../../models/categoriaModel');
const { Op } = require("sequelize");

// Database Connection
require('../../config/db');

router.get('/all', async (req, res) => {

    const respProduct = await Producto.findAll({
        include: [Categoria]
    });
    res.json(respProduct);
});

router.get('/name/:nombreProducto', async (req, res) => {
    const param = req.params.nombreProducto.toUpperCase();

    const respProducID = await Producto.findAll({
        include: [Categoria],
        where: {
            name: {
                [Op.substring]: `${param}`
            }
        }

    });

    if (respProducID.length===0) {
        return res.status(404).json({
            message: 'No existen resultados.'
        });
    }
    res.json(respProducID);
});

router.get('/category/:idCategoria', async (req, res) => {

    const regExp = new RegExp( /[0-9]/ );
    const resultado = regExp.test( req.params.idCategoria )

    if (!resultado) {
        return res.status(400).json({
            message: 'Tipo de parametro de permitido.'
        });
    }

    let idCategoria = Number(req.params.idCategoria); 

    const respCateID = await Producto.findAll({
        include: [Categoria],
        where: {
            category: {
                [Op.eq]: idCategoria
            }
        }
    });

    if (respCateID.length===0) {
        return res.status(404).json({
            message: 'No existen resultados.'
        });
    }

    res.json(respCateID);
});

module.exports = router;