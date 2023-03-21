const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tiendaSchema = new Schema(
    {
        nombre: {type: String, required: true},
        ciudad: {type: String, required: true},
        cif:{type: String, required:true},
        clientes: [{type: Schema.Types.ObjectId, ref: "client"}]
    },{
        timestamps: true
    }
)

const Tienda = mongoose.model('tienda', tiendaSchema);

module.exports = Tienda;





