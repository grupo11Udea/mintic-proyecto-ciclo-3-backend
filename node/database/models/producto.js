const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');
const usuario = require('../models/usuario')

class producto extends Model{}

producto.init({
    
    nombre:DataTypes.STRING,
    descripcion:DataTypes.STRING,
    valor_unitario:DataTypes.DOUBLE,
    estado:DataTypes.STRING
   },{
       sequelize,
       modelName:"producto",
       timestamps: false,
       tableName:'producto' 
   });
   
   module.exports = producto;
   producto.usuario = producto.belongsTo(usuario,{foreignKey: 'id_usuario', sourceKey: 'id'});