const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema(
    {
        nombre: { type: String, required: true },
        apellidos: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        ciudad: { type: String, required: false }
    }, {
    timestamps: true
}
)

const Client = mongoose.model('client', clientSchema);

module.exports = Client;