var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    date: Date,
    rating: Number,
    mealPrice: Number,
    student: Boolean,
    studentPrice: Number,
    timeTable: {
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String
    },
    description: String,
    comments:  [{ type: Schema.Types.ObjectId, ref: 'komentarji' }],
    icon: { data: Buffer, contentType: String },
    front: { data: Buffer, contentType: String }
});

var restaurant = mongoose.model('restaurant', restaurantSchema, "Restaurant");