const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Producto extends Model{}

Producto.init({
    
    nombre:DataTypes.STRING,
    descripcion:DataTypes.STRING,
    valor_unitario:DataTypes.DOUBLE,
    estado:DataTypes.STRING,
    usuario:DataTypes.INTEGER
   },{
       sequelize,
       modelName:"Producto",
       timestamps: false,
       tableName:'producto' 
   });
   
   module.exports = Producto;