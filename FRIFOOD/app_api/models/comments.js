var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const m2s = require('mongoose-to-swagger');

/**
 * @swagger
 * components:
 *  schemas:
 *   commentSchema:
 *    type: object
 *    properties:
*
 *     comment:
 *      type: string
 *     rating:
 *      type: number
 *     date:
 *      type: date
 */

const commentSchema = new Schema ({
        restaurant: {type: Schema.Types.ObjectId, ref: 'restaurant'},
        author: {type: Schema.Types.ObjectId, ref: 'uporabniki'},
        comment: String,
        rating: Number,
        date: Date
});

var comment = mongoose.model('comments', commentSchema, "Comments");

