const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');
const rol = require('../models/rol');
const estadoUsuario = require('../models/estadoUsuario')

class usuario extends Model{}

usuario.init({
    
    login:DataTypes.STRING
   },{
       sequelize,
       modelName:"usuario",
       timestamps: false,
       tableName:'usuario' 
   });
   
usuario.rol = usuario.belongsTo(rol,{foreignKey: 'id_rol', sourceKey: 'id_rol'});
usuario.estadoUsuario = usuario.belongsTo(estadoUsuario,{foreignKey: 'id_estado', sourceKey: 'id'});

module.exports = usuario;