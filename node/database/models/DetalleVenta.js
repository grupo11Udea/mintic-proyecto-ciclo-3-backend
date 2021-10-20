const {Model, DataTypes} = require("sequelize");
const sequelize = require('../db');
const producto = require('../models/producto')

class DetalleVenta extends Model{}
DetalleVenta.init({
    /*id_detalle_venta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },*/
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.DECIMAL,
    /*id_producto: DataTypes.INTEGER,
    documento_vendedor: DataTypes.STRING*/
},
{
    sequelize,
    tableName: "detalle_venta",
    createdAt: false,
    updatedAt: false,
    modelName: 'detalleVenta'
});
DetalleVenta.product = DetalleVenta.belongsTo(producto,{foreignKey: 'id_producto', sourceKey: 'id'});
module.exports = DetalleVenta;