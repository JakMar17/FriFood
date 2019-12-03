var mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*uporabniki: [{
    name: 'kai',
    surname: 'ti',
    email: 'v@v',
    passwd: 'v'
}, {
    name: 'test',
    surname: 'test',
    email: 'test@test',
    passwd: 'test'
}]*/

const uporabnikiShema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    passwd: String,
    komentarjiUporabnika: [{ type: Schema.Types.ObjectId, ref: 'komentarji' }]
});

const komentarjiShema = new mongoose.Schema({
    opis: String,
    uporabnik: { type: Schema.Types.ObjectId, ref: 'uporabniki' }
});

var komentarji = mongoose.model('komentarji', komentarjiShema, "Komentar");
var uporabniki = mongoose.model('uporabniki', uporabnikiShema, "Uporabnik");

