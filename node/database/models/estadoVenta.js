const {Model, DataTypes} = require("sequelize");
const sequelize = require('../db');

class estadoVenta extends Model{}
estadoVenta.init({
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING
},
{
    sequelize,
    tableName: "estado_venta",
    createdAt: false,
    updatedAt: false,
    modelName: 'estadoVenta'
});
module.exports = estadoVenta;