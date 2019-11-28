var mongoose = require('mongoose');

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
    passwd: String
});

mongoose.model('uporabniki', uporabnikiShema, "Uporabnik");
