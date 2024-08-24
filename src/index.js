const express = require('express');
const conectarBD = require('../configdb/db'); 
const cors = require('cors');


const app = express();
const puerto = process.env.PORT || 5000;

// llamamos  anuestra  funcion conectarBD
conectarBD();
app.use(cors());
app.use(express.json());

// Rutas del proyecto
app.use('/api/clientes', require('../routes/clientesRutas'));

// RUTA DESDE  LA WEB
app.get('/', (req, res) =>{
    res.send("Bienvenidos estamos desde el navegador");
})

app.listen(puerto,() => console.log("Estamos conectados desde el servidor", puerto));