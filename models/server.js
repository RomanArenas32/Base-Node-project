const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;

        //midlewares
        this.midlewares();
        this.routes();
    }

    midlewares() {
        this.app.use(express.json()); //Formatea todo lo que viene en formato json
        this.app.use(cors()); //soluciona errores de los cors
        this.app.use(express.static('public')); //renderiza el html de la carpeta public 
    }

    routes() {
        this.app.use('/api/users', require('../routes/routes'));
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log("servidor corriendo en el puerto: ", this.PORT)
        })
    }
}



module.exports = Server