const express = require('express');
const router = express.Router();
const cliente = require('../database/models/cliente');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;




//Create Producto
router.post('/cliente', async (req, res) => {
    console.log('req', req.body);
    try{
        let createdUser = await cliente.create(req.body);
        res.json(createdUser)
    }catch(e){
        console.log('Error al momento de registrar el cliente',e);
        res.statusCode = 500;
        res.json(e);
    }
});


//Traer todos los productos de la base de datos
router.get('/cliente', (req, res) => {

    cliente.findAll({
        attributes: ['id', 'nombre', 'descripcion', 'valor_unitario', 'estado', 'usuario']
    }).then(cliente => {
        res.json(cliente);
    })

});


//READ /api/post/:id
router.get('/cliente/:id', (req, res) => {
    cliente.findByPk(req.params.id).then(cliente => {
        res.json(cliente);
    })
});

//UPDATE /api/post/:id

/*router.put('/:id',(req, res)=>{
    cliente.update({
        nombre: req.body.nombre
    },{
        where: {
            id: req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
});*/

//DELETE /api/producto/:id
/*router.delete('/:id',(req, res)=>{
    producto.destroy({
        where:{
            id: req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
});*/


module.exports = router;