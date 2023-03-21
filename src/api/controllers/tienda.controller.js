const Tienda = require("../models/tienda.model");


const getTienda = async (req, res) => {
    try {
        const allTiendas = await Tienda.find();        
        return res.status(200).json(allTiendas);        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

const getTiendaByCity = async (req, res) => {
    try {
        const { city } = req.params;
        const allTiendas = await Tienda.find({ ciudad: city });        
        return res.status(200).json(allTiendas);       
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postTienda = async (req, res) => {
    try {
        console.log(req.body);
        const newTienda = new Tienda(req.body);
        const createdTienda = await newTienda.save();  
        return res.status(201).json(createdTienda);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

const putTienda = async (req, res) => {
    try {
        const { id } = req.params;
        const putTienda = new Tienda(req.body);
        putTienda._id = id;
        const updateTienda = await Tienda.findByIdAndUpdate(id, putTienda, { new: true }); 
        if (!updateTienda) {    
            return res.status(404).json({ "message": "Tienda not found" });
        }
        return res.status(200).json(updateTienda);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteTienda = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTienda = await Tienda.findByIdAndDelete(id); 
        if (!deleteTienda) {    
            return res.status(404).json({ "message": "Tienda not found" });
        }
        return res.status(200).json(deleteTienda);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { getTienda, postTienda, putTienda, deleteTienda, getTiendaByCity };