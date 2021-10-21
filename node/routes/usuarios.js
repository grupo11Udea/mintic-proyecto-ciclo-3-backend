const express = require('express');
const router = express.Router();
const usuario = require('../database/models/usuario');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Traer todos los usuarios de la base de datos
router.get('/usuarios', (req, res) => {
    usuario.findAll({
        attributes: ['id', 'login', 'id_rol', 'id_estado']
    }).then(usuario => {
        res.json(usuario);
    })
});

//Traer los usuarios por el nombre o por el id
router.get('/usuarios/:id', (req, res) => {
    console.log("ID", req.params.id)
    usuario.findAll({
        attributes: ['id', 'login', 'rol', 'estado', 'vendedor'],
        where: {
            [Op.and]: [{
                id: {
                    [Op.like]: `%${req.params.id}%`
                }
            }]
        }
    }).then(usuarios => {
        res.json(usuarios);
    })
});

// Crear Usuario
router.post('/usuarios', (req, res) => {
    console.log('req', req.body);
    usuario.create(
        req.body
    ).then(usuario => {
        res.json(usuario);
    })
});

// UPDATE /api/post/:id
router.patch('/usuarios/:id', (req, res) => {
    usuario.update({
        login: req.body.login,
        rol: req.body.rol,
        estado: req.body.estado
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

//DELETE /api/producto/:id
router.delete('/usuarios/:id', (req, res) => {
    usuario.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

//Traer los usuarios por el email
router.get('/usuarios/getUsuarioByLogin/:login', (req, res) => {
    console.log("ID", req.params.login)
    usuario.findAll({
        attributes: ['id', 'login', 'id_rol', 'id_estado'],
        where: {
            [Op.and]: [{
                login: {
                    [Op.like]: `%${req.params.login}%`
                }
            }]
        }
    }).then(usuarios => {
        if(usuarios.length==0){
            res.status(404);
        }
        res.json(usuarios);
    })
});


module.exports = router;