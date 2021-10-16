const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class usuario extends Model{}

usuario.init({
    login:DataTypes.STRING,
    password:DataTypes.STRING,
    rol:DataTypes.INTEGER,
    estado:DataTypes.INTEGER,
    vendedor:DataTypes.STRING
   },{
       sequelize,
       modelName:"usuario",
       timestamps: false,
       tableName:'usuario' 
   });
   
   module.exports = usuario;