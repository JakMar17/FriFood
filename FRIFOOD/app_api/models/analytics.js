var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analyticsSchema = new Schema ({
    name: String,
    numAPICalls: Number
});

var analytics = mongoose.model('analytics', analyticsSchema, "Analytics");