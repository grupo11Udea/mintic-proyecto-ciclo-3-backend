const express = require('express');
const router = express.Router();
const producto = require('../database/models/producto');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;




//Create Producto
router.post('/',(req,res)=> {
    console.log('req', req.body);
    producto.create(
        req.body
    ).then(producto=>{
        res.json(producto);
})
});


//Traer todos los productos de la base de datos
router.get('/',(req, res)=>{

    producto.findAll({
        attributes: ['id','nombre', 'descripcion', 'valor_unitario', 'estado','usuario' ]
    }).then(producto=>{
        res.json(producto);
    })

});


//Traer los productos por el nombre o por el id
router.get('/getByName/',(req, res)=>{
    console.log(req.query.nombre)
    console.log(req.query.id)
    producto.findAll({
        attributes: ['id','nombre','descripcion' ,'valor_unitario', 'estado','usuario' ],
        where: {
           [Op.and]:[{nombre: {
                [Op.like]: `%${req.query.nombre}%`}},{id: {
                    [Op.like]: `%${req.query.id}%`}}] 
                
            } 
           
        
    }).then(productos =>{
        res.json(productos);
    })

});


//READ /api/post/:id
router.get('/:id',(req, res)=>{
    producto.findByPk(req.params.id).then(productos=>{
        res.json(productos);
    })
});

//UPDATE /api/post/:id

router.put('/:id',(req, res)=>{
    producto.update({
        nombre: req.body.nombre
    },{
        where: {
            id: req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
});

//DELETE /api/producto/:id
router.delete('/:id',(req, res)=>{
    producto.destroy({
        where:{
            id: req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
});


module.exports = router;