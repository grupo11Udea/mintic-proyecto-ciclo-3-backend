const express = require('express');
const router = express.Router();
const estadoVenta = require('../database/models/estadoVenta');
const Sequelize = require('sequelize');

//Traer todos los productos de la base de datos
router.get('/estado/estadoVenta/',(req, res)=>{

    estadoVenta.findAll().then(estadoVenta=>{
        res.json(estadoVenta);
    })

});

module.exports = router;