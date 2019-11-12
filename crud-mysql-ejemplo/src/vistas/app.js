const path = require('path');
const express = require('express');
const mysql = require('mysql');
const myConnection =  require('express-myconnection');
const app = express();

//importar rutas
const indiceRutas = require('./src/rutas/index.js');

//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('view',path.jon(__dirname,'vistas'));

//middleware
//app use()


//Usar rutas
app.use('/', indiceRutas);

app.listen(app.get('port'),() => {
	console.log('Escucha en el puerto 3000');
});