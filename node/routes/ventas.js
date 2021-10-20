const express = require('express');
const router = express.Router();
const venta = require('../database/models/venta');
const Sequelize = require('sequelize');
const cliente = require('../database/models/cliente');
const estadoVenta = require('../database/models/estadoVenta');
const { Op } = require("sequelize");

//Create Producto
router.post('/ventas', async (req, res) => {
    console.log('req', req.body);
    try{
        let ventaNueva = await venta.create(req.body,
            {include: [{
                association: venta.detalleVenta
              }]})
        res.json(ventaNueva);      
    }catch(e){
        console.log('Error al momento de registrar el cliente',e);
        res.statusCode = 500;
        res.json(e);
    }
});

router.get('/ventasByIdAndDocumento', async (req, res) => {
    console.log(req.query.nombre);
    try{
        let ventas = await venta.findAll({
            where: {
                [Op.and]: [
                    { id : {[Op.like]: `%${req.query.id}%` }},
                    { numero_documento: {[Op.like]: `%${req.query.numero_documento}%` }},
                ]
            },
            include: [{model: cliente}]//,{ model: estadoVenta }
        });
        console.log(ventas);
        res.json(ventas);
    }catch(e){
        console.log('Error al momento de consultar el cliente',e);
        res.statusCode = 500;
        res.json(e);
    }
});

router.get('/ventas',async (req,res)=>{
    try{
        let ventas = await venta.findAll({include:cliente});
        res.json(ventas);
    }catch(e){
        console.log('Error al momento de consultar el cliente',e);
        res.statusCode = 500;
        res.json(e);
    }
});

router.put('/ventas/:id',(req, res)=>{
    console.log(req.body.identificador);
    console.log(req.body.valor_total);
    venta.update({
        identificador: req.body.identificador,
        valor_total:  req.body.valor_total,
        estado: req.body.estado
    },{
        where: {
            id: req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
});

module.exports = router;