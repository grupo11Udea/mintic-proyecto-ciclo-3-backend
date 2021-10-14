const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class producto extends Model{}

producto.init({
    
    nombre:DataTypes.STRING,
    descripcion:DataTypes.STRING,
    valor_unitario:DataTypes.DOUBLE,
    estado:DataTypes.STRING,
    usuario:DataTypes.INTEGER
   },{
       sequelize,
       modelName:"producto",
       timestamps: false,
       tableName:'producto' 
   });
   
   module.exports = producto;