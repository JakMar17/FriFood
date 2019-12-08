var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uporabnikiShema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    passwd: String,
    komentarjiUporabnika: [{ type: Schema.Types.ObjectId, ref: 'komentarji' }]
});

var uporabniki = mongoose.model('uporabniki', uporabnikiShema, "Uporabnik");

