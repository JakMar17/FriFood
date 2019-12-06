var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
        restaurant: {type: Schema.Types.ObjectId, ref: 'restaurants'},
        author: {type: Schema.Types.ObjectId, ref: 'uporabniki'},
        comment: String,
        rating: Number,
        date: Date
});

var comment = mongoose.model('comments', commentSchema, "Comments");