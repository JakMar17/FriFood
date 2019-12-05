var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    author: {type: Schema.Types.ObjectId, ref: 'uporabniki'},
    comment: String,
    rating: Number,
    date: Date,
    // location: {type: Schema.Types.ObjectID, ref: 'restaurant'}
});

var comment = mongoose.model('comment', commentSchema, "Comment");