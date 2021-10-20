const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class cliente extends Model{}

cliente.init({
    numero_documento:{
       type:  DataTypes.STRING,
       primaryKey: true
    },
    nombres:DataTypes.STRING,
    apellidos:DataTypes.STRING
   },{
       sequelize,
       modelName:"cliente",
       timestamps: false,
       tableName:'cliente' 
   });
   
   module.exports = cliente;