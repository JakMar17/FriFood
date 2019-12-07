var mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
primer userja

uporabniki: [{
    name: 'kai',
    surname: 'ti',
    email: 'v@v',
    passwd: 'v'
}, {
    name: 'test',
    surname: 'test',
    email: 'test@test',
    passwd: 'test'
}]

*/

const uporabnikiShema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    passwd: String,
    komentarjiUporabnika: [{ type: Schema.Types.ObjectId, ref: 'komentarji' }]
});

var uporabniki = mongoose.model('uporabniki', uporabnikiShema, "Uporabnik");

