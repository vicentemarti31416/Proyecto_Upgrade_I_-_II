const Client = require("../models/cliente.model");


const getCliente = async (req, res) => {
    try {
        const allClients = await Client.find();         
        return res.status(200).json(allClients);       
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getClienteByCity = async (req, res) => {
    try {
        const { city } = req.params;
        const allClients = await Client.find({ ciudad: city });        
        return res.status(200).json(allClients);       
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postCliente = async (req, res) => {
    try {
        console.log(req.body);
        const newCliente = new Client(req.body);
        const createdClient = await newCliente.save(); 
        return res.status(201).json(createdClient);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const putCliente = new Client(req.body);
        putCliente._id = id;
        const updateCliente = await Client.findByIdAndUpdate(id, putCliente, { new: true }); 
        if (!updateCliente) {     
            return res.status(404).json({ "message": "cliente not found" });
        }
        return res.status(200).json(updateCliente);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCliente = await Client.findByIdAndDelete(id);
        if (!deleteCliente) {    
            return res.status(404).json({ "message": "cliente not found" });
        }
        return res.status(200).json(deleteCliente);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { getCliente, postCliente, putCliente, deleteCliente, getClienteByCity };