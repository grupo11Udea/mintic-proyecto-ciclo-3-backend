const express = require('express');
const app = express();
const sequelize = require('./database/db');
const producto = require('./database/models/producto');
var cors = require('cors');

const hostname = '127.0.0.1';

const port = 5000;

//middleWare
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

app.use('/api', require('./routes/productos'));
app.use('/api', require('./routes/usuarios'));

app.listen(port, ()=>{

    console.log(`La API está corriendo en el puerto http://localhost:${port}`);
    sequelize.sync({force: false}).then(()=>{
        console.log('DB Connected!');
    }).catch((error)=>{
        console.log('An error has ocurred!', error);
    })
    
})






