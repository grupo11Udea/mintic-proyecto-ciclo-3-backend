const express = require('express');
const app = express();
const sequelize = require('./database/db');
const Producto = require('./database/models/Producto');
const cliente = require('./database/models/cliente');
const detalleVenta = require('./database/models/DetalleVenta');
const estadoUsuario = require('./database/models/estadoUsuario');
const rol = require('./database/models/rol');
var cors = require('cors');

const hostname = '127.0.0.1';

const port = 5000;

//middleWare
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

app.use('/api', require('./routes/productos'));
app.use('/api', require('./routes/usuarios'));
app.use('/api', require('./routes/clientes'));
app.use('/api', require('./routes/ventas'));
app.use('/api', require('./routes/estadoVenta'));

app.listen(port, ()=>{

    console.log(`La API está corriendo en el puerto http://localhost:${port}`);
    sequelize.sync({force: false}).then(()=>{
        console.log('DB Connected!');
    }).catch((error)=>{
        console.log('An error has ocurred!', error);
    })
    
})






