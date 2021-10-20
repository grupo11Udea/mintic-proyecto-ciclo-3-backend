const {Model, DataTypes} = require("sequelize");
const sequelize = require('../db');
const DetalleVenta = require("./DetalleVenta");
const cliente = require("./cliente");
const estadoVenta = require("./EstadoVenta");
const usuario = require("./usuario");

class venta extends Model{}
venta.init({
    valor_total: DataTypes.DECIMAL,
    identificador: DataTypes.STRING,
    fecha: DataTypes.DATE,
    //estado: DataTypes.INTEGER,
    //numero_documento: DataTypes.STRING
},
{
    sequelize,
    tableName: "venta",
    createdAt: false,
    updatedAt: false,
});
venta.detalleVenta = venta.hasMany(DetalleVenta,{foreignKey: 'id_venta', sourceKey: 'id'});
venta.cliente = venta.belongsTo(cliente,{foreignKey: 'numero_documento', sourceKey: 'numero_documento'});
venta.estadoVenta = venta.belongsTo(estadoVenta,{foreignKey: 'estado', sourceKey: 'id'});
venta.usuario = venta.belongsTo(usuario,{foreignKey: 'id_usuario', sourceKey: 'id'});
module.exports = venta;