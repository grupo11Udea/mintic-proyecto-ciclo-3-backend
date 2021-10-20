const {Model, DataTypes} = require("sequelize");
const sequelize = require('../db');

class rol extends Model{}
rol.init({
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING
},
{
    sequelize,
    tableName: "rol",
    createdAt: false,
    updatedAt: false,
    modelName: 'rol'
});
module.exports = rol;