const mongoose = require('mongoose');

const Client = require('../api/models/cliente.model');

const arrayClients = [
    {
        "nombre": "Maria", 
        "apellidos": "Martinez",
        "email": "maria@maria.com", 
        "phone": "600514698", 
        "ciudad": "Madrid"
    },{
        "nombre": "Luis", 
        "apellidos": "Lopez",
        "email": "luis@luis.com", 
        "phone": "600200300", 
        "ciudad": "Toledo"
    },{
        "nombre": "Pepe", 
        "apellidos": "Perez",
        "email": "pepe@pepe.com", 
        "phone": "600300500", 
        "ciudad": "Badajoz"
    },{
        "nombre": "Juan", 
        "apellidos": "Juarez",
        "email": "juan@juan.com", 
        "phone": "600700100", 
        "ciudad": "Caceres"
    }
]

mongoose.connect("mongodb://127.0.0.1:27017/test_upgrade", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    const allClients = await Client.find();
    if(allClients.length > 0){
        await Client.collection.drop()
        console.log("clientes borrados");
    };
})
.catch((err) => console.log("error borrando clientes", err))
.then(async () => {
    const clientsMap = arrayClients.map((client) => new Client(client));
    await Client.insertMany(clientsMap);
    console.log("clientes insertados");
})
.catch((err) => console.log("error insertando clientes", err))
.finally(() => mongoose.disconnect());
