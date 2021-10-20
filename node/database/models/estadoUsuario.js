const {Model, DataTypes} = require("sequelize");
const sequelize = require('../db');

class estadoUsuario extends Model{}
estadoUsuario.init({
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING
},
{
    sequelize,
    tableName: "estado_usuario",
    createdAt: false,
    updatedAt: false,
    modelName: 'estadousuario'
});
module.exports = estadoUsuario;