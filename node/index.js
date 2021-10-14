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




app.listen(port, ()=>{

    console.log(`la api esta corriendo epor el puerto ${port}`);
    sequelize.sync({force: false}).then(()=>{
        console.log('nos hems conectado  la base de datos');
    }).catch((error)=>{
        console.log('se ha producido un error', error);
    })
    
})






